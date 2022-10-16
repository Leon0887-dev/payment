import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(private http: HttpClient) {}

  auth(email: string, senha: string): Observable<any> {
    return this.http
      .post(
        'http://localhost:8080/auth',
        {
          email: email,
          senha: senha,
        },
        { observe: 'response' }
      )
  }
}
