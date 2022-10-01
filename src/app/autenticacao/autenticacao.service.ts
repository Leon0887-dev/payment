import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, tap } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  auth(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.http.post('http://localhost:3000/user/login', {
      userName: usuario,
      password: senha,
    }, {observe: 'response'}).pipe(
      tap(res => {
        const authToken = res.headers.get('x-access-token') ?? '';
        this.tokenService.saveToken(authToken);
      })
    );
  }
}
