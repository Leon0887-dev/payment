
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentSchedulingRoutingModule } from './payment-scheduling-routing.module';
import { PaymentSchedulingComponent } from './payment-scheduling.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageAlertModule } from '../message-alert/message-alert.module';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    PaymentSchedulingComponent,
    SchedulingComponent,
    AppointmentListComponent
  ],
  imports: [
    CommonModule,
    PaymentSchedulingRoutingModule,
    HeaderModule,
    FooterModule,
    ReactiveFormsModule,
    MessageAlertModule,
    NgxMaskModule

  ]
})
export class PaymentSchedulingModule { }
