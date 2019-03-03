import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PoolReservationService {
  constructor(public firestore: AngularFirestore) {

  }

    //example fot save to firestore. this method can from any compponent

    addEvent(event){
      this.firestore.collection(`events/${event.month}`).add(event);
    }
}
