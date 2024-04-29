import { Injectable } from '@angular/core';
// import {Firestore,collection,doc, updateDoc, collectionChanges, collectionData} from '@angular/fire/firestore';
// import { list } from '@angular/fire/database';
import { AngularFireDatabase} from '@angular/fire/compat/database';
/* import { room } from './room';
import { Observable } from 'rxjs';
import { inject } from '@angular/core'; */


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor( private db:AngularFireDatabase){}
  /* firestore: Firestore = inject(Firestore);
  collectionInst = collection(this.firestore,"rooms"); 
  colect : any; */
  Updateroom(room:any,val:any){
    const data=val;
    const ref = this.db.object('rooms/'+room);
    ref.update(data);
  }
  getReadings(){
     
    return this.db.object('rooms').valueChanges();
  }
}
