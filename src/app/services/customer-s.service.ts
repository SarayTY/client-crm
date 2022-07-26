import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  Firestore,
  updateDoc,
} from '@angular/fire/firestore';
import { collectionData, docData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private customersRef: CollectionReference<Customer>;
  private customers$: Observable<Customer[]>;

  //
  constructor(private afs: Firestore) {
    this.customersRef = collection(
      this.afs,
      'customers'
    ) as CollectionReference<Customer>;

    this.customers$ = collectionData<Customer>(this.customersRef, {
      idField: 'id',
    }).pipe(shareReplay(1));
  }

  remove(id: string) {
    return deleteDoc(doc(this.customersRef, id));
  }

  add(customer: Omit<Customer, 'id'>) {
    return addDoc<Customer>(this.customersRef, customer);
  }

  getAll() {
    return this.customers$;
  }

  getById(id: string) {
    return docData<Customer>(doc(this.customersRef, id), {
      idField: 'id',
    });
  }

  update({ id, ...customer }: Partial<Customer>) {
    if(!id){
    return;
  }

  return updateDoc<Customer>(doc<Customer>(this.customersRef , id) , customer);
  }
}