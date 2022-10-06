import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentListComponent } from './appointment-list.component';
import { NgxMaskModule } from 'ngx-mask';




@NgModule({
  declarations: [AppointmentListComponent],
  imports: [
    CommonModule,
    NgxMaskModule,
   
  ],
  exports: [AppointmentListComponent]
})
export class AppointmentListModule { }
