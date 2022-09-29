import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentSchedulingRoutingModule } from './payment-scheduling-routing.module';
import { PaymentSchedulingComponent } from './payment-scheduling.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';


@NgModule({
  declarations: [
    PaymentSchedulingComponent,
    SchedulingComponent,
    AppointmentListComponent
  ],
  imports: [
    CommonModule,
    PaymentSchedulingRoutingModule
  ]
})
export class PaymentSchedulingModule { }
