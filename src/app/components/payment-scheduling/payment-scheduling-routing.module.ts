import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { PaymentSchedulingComponent } from './payment-scheduling.component';
import { SchedulingComponent } from './scheduling/scheduling.component';

const routes: Routes = [
  {
    path:'',
    component: PaymentSchedulingComponent, 
    children: [{
      path: '',
      component: SchedulingComponent
    },
    {
      path: '',
      component: AppointmentListComponent,
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentSchedulingRoutingModule { }
