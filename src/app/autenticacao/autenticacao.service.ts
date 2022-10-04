import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

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
