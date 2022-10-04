

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxMaskModule, IConfig } from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
 import localePT from '@angular/common/locales/pt'
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
 registerLocaleData(localePT);


 export  const  options : Partial < null | IConfig >  |  ( ( )  =>  Partial < IConfig > )  =  null ;


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    AutenticacaoModule
    
   
   
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-br'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
