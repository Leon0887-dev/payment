import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';
import { NewUserServiceService } from './new-user-service.service';

@Injectable({
  providedIn: 'root'
})
export class ExistsUserService {

  constructor(private newUserService: NewUserServiceService) { }


  userAlreadyExists(){
    return (control: AbstractControl) =>{
      return control.valueChanges.pipe(
        switchMap( nameUser => this.newUserService.checkExistingUser(nameUser)),
        map(userExists => userExists ? {userExisting: true} : null),
        first()
      )
    }
  }
}
