import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExistsUserService } from '../service/exists-user.service';
import { NewUserServiceService } from '../service/new-user-service.service';
import { minusculoValidator } from './minusculo.validator';
import { userPasswordDifferent } from './user-password-validator';
import { ToastrService } from 'ngx-toastr';

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
    private router: Router,
    private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {
    this.newUserForms = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nameUser: ['', [Validators.required, , minusculoValidator]],
      nome: ['', [Validators.required]],
      senha: ['', [Validators.required]],
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
        this.toastrService.success('úsuario cadastrado com sucesso');
        this.router.navigate([''])
      }, (error) =>{
        this.toastrService.error('Error ao realizar cadastro');
      })
    }
    
  }
}


// [this.existsUserService.userAlreadyExists()]