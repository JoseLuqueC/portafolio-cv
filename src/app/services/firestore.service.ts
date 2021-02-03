import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  getMensajes(){
    return this.firestore.collection('mensajes').snapshotChanges();
  }

  setMensaje(item){
    return this.firestore.collection('mensajes').add(item);
  }
}
