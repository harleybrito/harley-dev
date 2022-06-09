import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  docData,
  Firestore,
} from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private firestore: Firestore) {}

  getSystems() {
    const result = collection(this.firestore, 'systems');
    return collectionData(result);
  }
}
