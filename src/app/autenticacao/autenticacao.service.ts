import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(private http: HttpClient) {}

  auth(usuario: string, senha: string): Observable<any> {
    return this.http.post('http://localhost:3000/user/login', {
      userName: usuario,
      password: senha,
    });
  }
}
