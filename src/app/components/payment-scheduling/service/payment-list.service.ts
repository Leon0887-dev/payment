import { Injectable } from '@angular/core';
import { CreatePayment } from '../create-payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentListService {
  set(scheduleList: any) {
    throw new Error('Method not implemented.');
  }

  public _paymentList!: any[]

  get paymentList():any {
    return this._paymentList;
  }

  set paymentList(value: any){
    this._paymentList = value;
  }

  constructor() { }
}
