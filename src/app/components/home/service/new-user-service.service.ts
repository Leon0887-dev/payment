import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from '../new-user/new-user';

@Injectable({
  providedIn: 'root'
})
export class NewUserServiceService {

  constructor(private http: HttpClient) { }

  newRegister(newUser: NewUser){
    return this.http.post('http://localhost:3000/user/signup', newUser)
  }


  checkExistingUser(nameUser: string){
    return this.http.get(`http://localhost:3000/user/exists/${nameUser}`)
  }
}
