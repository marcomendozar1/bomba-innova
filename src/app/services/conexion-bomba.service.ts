import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bomba } from '../_DAO/bomba';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ConexionBombaService {

  private itemsCollection: AngularFirestoreCollection<Bomba>;
  items: Observable<Bomba[]>;

  private itemDoc: AngularFirestoreDocument<Bomba>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Bomba>('Bomba');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Bomba;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  async initializeItems(): Promise<any> {
    const items = await this.afs.collection('Bomba')
      .valueChanges().pipe(first()).toPromise();
    return items;
  }
  listaItem() {
    return this.items;
  }

  addItem(item: Bomba) {
    item.id = this.afs.createId();
    var data = JSON.parse(JSON.stringify(item));
    this.itemsCollection.doc(item.id).set(data);
  }

  deleteItem(item) {
    this.itemDoc = this.afs.doc<Bomba>(`Bomba/${item.id}`);
    this.itemDoc.delete();
  }

  updateItem(item) {
    this.itemDoc = this.afs.doc<Bomba>(`Bomba/${item.id}`);
    this.itemDoc.update(item);
  }
}