import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalTableComponent } from './modal-table.component';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    ModalTableComponent
  ],
  imports: [
    CommonModule,
    ModalDialogModule,
    NgxMaskModule
  ],
  exports: [ModalTableComponent]
})
export class ModalTableModule { }
