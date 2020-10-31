import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Log } from '../_DAO/log';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ConexionLogService {

  private itemsCollection: AngularFirestoreCollection<Log>;
  items: Observable<Log[]>;

  private itemDoc: AngularFirestoreDocument<Log>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Log>('Log');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Log;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  listaItem() {
    return this.items;
  }
  async initializeItems(): Promise<any> {
    const items = await this.afs.collection('Log')
      .valueChanges().pipe(first()).toPromise();
    return items;
  }
  addItem(item: Log) {
    item.id = this.afs.createId();
    var data = JSON.parse(JSON.stringify(item));
    this.itemsCollection.doc(item.id).set(data);
  }

  deleteItem(item) {
    this.itemDoc = this.afs.doc<Log>(`Log/${item.id}`);
    this.itemDoc.delete();
  }

  updateItem(item) {
    this.itemDoc = this.afs.doc<Log>(`Log/${item.id}`);
    this.itemDoc.update(item);
  }
}

