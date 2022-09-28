import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentSchedulingRoutingModule } from './payment-scheduling-routing.module';
import { PaymentSchedulingComponent } from './payment-scheduling.component';
import { SchedulingComponent } from './scheduling/scheduling.component';


@NgModule({
  declarations: [
    PaymentSchedulingComponent,
    SchedulingComponent
  ],
  imports: [
    CommonModule,
    PaymentSchedulingRoutingModule
  ]
})
export class PaymentSchedulingModule { }
