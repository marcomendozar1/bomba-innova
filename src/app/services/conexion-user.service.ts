import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map, finalize, first } from 'rxjs/operators';
import { UserCuenta } from '../_DAO/user-cuenta';


@Injectable({
  providedIn: 'root'
})

export class ConexionUserService {
  //Variables de Control
  title = "cloudsSorage";
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;

  private itemsCollection: AngularFirestoreCollection<UserCuenta>;
  items: Observable<UserCuenta[]>;

  private itemDoc: AngularFirestoreDocument<UserCuenta>;

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) {
    //Obtenemos los usuarios registrados
    this.itemsCollection = afs.collection<UserCuenta>('Users');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as UserCuenta;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  listaItem() {
    return this.items;
  }

  //Devuelve una collecion de datos que permite filtrar informacion
  async initializeItems(): Promise<any> {
    const items = await this.afs.collection('Users')
      .valueChanges().pipe(first()).toPromise();
    return items;
  }

  //Agregar Usuario
  addItem(item: UserCuenta) {
    item.id = this.afs.createId();
    var data = JSON.parse(JSON.stringify(item));
    this.itemsCollection.doc(item.id).set(data);
  }

  //Borrar Usuario
  deleteItem(item) {
    this.itemDoc = this.afs.doc<UserCuenta>(`Users/${item.id}`);
    this.itemDoc.delete();
  }

  //Actualizar Usuario
  updateItem(item) {
    item.img = this.fb;
    this.itemDoc = this.afs.doc<UserCuenta>(`Users/${item.id}`);
    this.itemDoc.update(item);
  }

  //Subir Imagen
  onFileSelected(event, n) {
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'name-your-file-path-here';
    const ref = this.storage.ref(filePath);
    const task = ref.putString(file);
  }

}
