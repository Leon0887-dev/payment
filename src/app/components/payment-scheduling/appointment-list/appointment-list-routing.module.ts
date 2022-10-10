import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './appointment-list.component';
import { ModalTableComponent } from './modal-table/modal-table.component';


const routes: Routes = [
  {
    path: '',
    component: AppointmentListComponent,
    children: [{
      path:'edit',
      component:ModalTableComponent 
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentListRoutingModule { }
