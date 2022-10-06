import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentListComponent } from './appointment-list.component';
import { NgxMaskModule } from 'ngx-mask';
import { ModalTableModule } from './modal-table/modal-table.module';




@NgModule({
  declarations: [AppointmentListComponent],
  imports: [
    CommonModule,
    NgxMaskModule,
    ModalTableModule
   
  ],
  exports: [AppointmentListComponent]
})
export class AppointmentListModule { }
