import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExistsUserService } from '../service/exists-user.service';
import { NewUserServiceService } from '../service/new-user-service.service';
import { minusculoValidator } from './minusculo.validator';
import { userPasswordDifferent } from './user-password-validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  newUserForms!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserServiceService,
    private existsUserService: ExistsUserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newUserForms = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, , minusculoValidator], [this.existsUserService.userAlreadyExists()]],
      fullName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    },
    {
      validators: [userPasswordDifferent]
    }
    );
  }

  registerUser() {
    if(this.newUserForms.valid){
      const newUser = this.newUserForms.getRawValue();
      this.newUserService.newRegister(newUser).subscribe(() =>{
        this.router.navigate([''])
      }, (error) =>{
        alert('Usuario ou senha inválidos');
      })
    }
    
  }
}
