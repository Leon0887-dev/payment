import { Injectable } from '@angular/core';
import { CreatePayment } from '../create-payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentListService {
  

  public _paymentList!: any[]

  
  constructor() { }
  
  get paymentList():any {
    return this._paymentList;
  }

  set paymentList(value: any){
    this._paymentList = value;
  }
}
