import { Component, OnInit } from '@angular/core';
import { PaymentServiceService } from '../service/payment-service.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

  constructor(private paymentService: PaymentServiceService) { }

  ngOnInit(): void {
  }

}
