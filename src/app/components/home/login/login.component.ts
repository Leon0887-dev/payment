import { TokenService } from 'src/app/autenticacao/token.service';
import { AutenticacaoService } from './../../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  senha = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router,
    private tokenService: TokenService,
    private toastrService: ToastrService,
    
  ) {}

  ngOnInit(): void {}

  public login(): void {
    this.authService.auth(this.email, this.senha).subscribe((res) => {
      const token = res.body.access_token;
      this.tokenService.saveToken(token)
      this.router.navigate(['agendamentos']);
    },() => {
      // alert('Usuário ou senha inválido!');
      this.toastrService.error('úsuario ou senha inválido')
      this.email = ''; 
      this.senha = ''; 
      
    })
      
  }

}
