import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentListComponent } from './appointment-list.component';
import { NgxMaskModule } from 'ngx-mask';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MessageAlertModule } from '../../message-alert/message-alert.module';

@NgModule({
  declarations: [AppointmentListComponent],
  imports: [
    CommonModule,
    NgxMaskModule,
    NgbModule,
    ReactiveFormsModule,
    MessageAlertModule
  ],
  exports: [AppointmentListComponent]
})
export class AppointmentListModule { }
