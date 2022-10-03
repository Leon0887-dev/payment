import { AutenticacaoService } from './../../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public login(): void {
    this.authService.auth(this.usuario, this.senha).subscribe(
      () => {
        this.router.navigate(['agendamentos']);
      },
      (error) => {
        alert('Usuario ou senha inválidos');
      }
    );
  }
}
