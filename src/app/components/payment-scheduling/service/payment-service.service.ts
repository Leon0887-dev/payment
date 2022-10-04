import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/autenticacao/token.service';
import { environment } from 'src/environments/environment';
import { CreatePayment } from '../create-payment';

const URL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class PaymentServiceService {
  public _scheduleList: any = [];

  get scheduleList() {
    return this._scheduleList;
  }

  set scheduleList(value: any) {
    this._scheduleList.push(value);
  }

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  createPayment(payment: CreatePayment): Observable<CreatePayment> {
    return this.http.post<CreatePayment>(`${URL}/payments`, payment);
  }

  readPayments(): Observable<CreatePayment[]> {
    return this.http.get<CreatePayment[]>(`${URL}/payments`);
  }

  readPayment(idPayment: number): Observable<CreatePayment> {
    return this.http.get<CreatePayment>(`${URL}/payments/${idPayment}`);
  }

  updatePayments(
    idPayment: number,
    editPayment: CreatePayment
  ): Observable<CreatePayment> {
    const token = this.tokenService.returnToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.put<CreatePayment>(
      `${URL}/payments/${idPayment}`,
      editPayment,
      { headers }
    );
  }

  deletePayment(idPayment: number): Observable<CreatePayment> {
    const token = this.tokenService.returnToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.delete<CreatePayment>(`${URL}/payments/${idPayment}`, {
      headers,
    });
  }
}
