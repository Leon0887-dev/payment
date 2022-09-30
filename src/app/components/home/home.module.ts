import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewUserComponent } from './new-user/new-user.component';
import { MessageAlertModule } from '../message-alert/message-alert.module';


@NgModule({
  declarations: [LoginComponent, HomeComponent, NewUserComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MessageAlertModule,
    
  ],
  exports: []
})
export class HomeModule { }
