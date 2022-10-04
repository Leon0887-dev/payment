import { TokenService } from 'src/app/autenticacao/token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AutenticacaoInterceptor implements HttpInterceptor {

  constructor( private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   const token = this.tokenService.returnToken();
    const dupReq = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    })

    return next.handle(dupReq);

  }
}
