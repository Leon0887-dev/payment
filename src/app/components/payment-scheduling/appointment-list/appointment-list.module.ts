import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentListComponent } from './appointment-list.component';
import { NgxMaskModule } from 'ngx-mask';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppointmentListComponent],
  imports: [
    CommonModule,
    NgxMaskModule,
    NgbModule
  ],
  exports: [AppointmentListComponent]
})
export class AppointmentListModule { }
