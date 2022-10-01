import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { Usuario } from './usuario';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private userSubject = new BehaviorSubject<Usuario>({})

  constructor(private tokenService: TokenService) { 
    if(this.tokenService.hasToken()){
      this.decodeJWT();
    }
  }

  private decodeJWT(){
    const token = this.tokenService.returnToken()
    const user = jwt_decode(token) as Usuario;
    this.userSubject.next(user)
  }


  public returnUser(){
    return this.userSubject.asObservable()
  }

 public  saveToken(token: string){
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }

  public logout(){
    this.tokenService.clearToken();
    this.userSubject.next({});
  }

 public  logged(){
    return this.tokenService.hasToken();
  }
}


