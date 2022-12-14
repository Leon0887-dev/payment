import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreatePayment } from '../create-payment';
import { ResponsePayments } from '../response-payments';

const URL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class PaymentServiceService {
  

  constructor(private http: HttpClient) {}

  createPayment(payment: CreatePayment): Observable<CreatePayment> {
    return this.http.post<CreatePayment>(`${URL}/payments`, payment);
  }

  readPayments(): Observable<ResponsePayments> {
    return this.http.get<ResponsePayments>(`${URL}/payments`);
  }

  readPayment(idPayment: string): Observable<ResponsePayments> {
    return this.http.get<ResponsePayments>(`${URL}/payments/${idPayment}`);
  }

  updatePayments(
    idPayment: number,
    editPayment: any
  ): Observable<any> {
    
    return this.http.put<any>(
      `${URL}/payments/${idPayment}`,
      editPayment     
    );
  }

  deletePayment(idPayment: string): Observable<any> {
    return this.http.delete<any>(`${URL}/payments/${idPayment}`);
  }
}
