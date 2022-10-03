import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/autenticacao/token.service';
import { environment } from 'src/environments/environment';
import { CreatePayment } from '../create-payment';


const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  createPayment(payment: CreatePayment): Observable<CreatePayment>{
    return this.http.post<CreatePayment>(`${API}/payments`, payment)
  }


  readPayments():Observable<CreatePayment[]>{
    return this.http.get<CreatePayment[]>(`${API}/payments`)
  }

  readPayment(idPayment: number):Observable<CreatePayment>{

    return this.http.get<CreatePayment>(`${API}/payments/${idPayment}`)
  }

  updatePayments(idPayment: number, editPayment: CreatePayment):Observable<CreatePayment>{
    const token = this.tokenService.returnToken();
    const headers = new HttpHeaders().append('x-access-token', token )
    return this.http.put<CreatePayment>(`${API}/payments/${idPayment}`,editPayment,{headers});

  }

  deletePayment(idPayment: number): Observable<CreatePayment>{
    const token = this.tokenService.returnToken();
    const headers = new HttpHeaders().append('x-access-token', token )
    return this.http.delete<CreatePayment>(`${API}/payments/${idPayment}`,{headers})
  }

}
