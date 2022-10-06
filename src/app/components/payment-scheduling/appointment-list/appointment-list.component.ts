import { PaymentServiceService } from './../service/payment-service.service';
import { PaymentListService } from './../service/payment-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
})
export class AppointmentListComponent implements OnInit {
  paymentAllList!: any;
  paymentList!: any;

  constructor(private paymentService: PaymentServiceService) {}

  ngOnInit(): void {
    this.getAllPayments();
  }



  getAllPayments() {
    this.paymentService.readPayments().subscribe((res) => {
      this.paymentAllList = res.content;
      this.paymentList = this.paymentAllList;
    });
  }

  getPaid() {
    this.paymentList = this.paymentAllList
    this.paymentList = this.paymentList.filter(
      (item: any) => item.status === 'PAID'
    );
  }

  getPending() {
    this.paymentList = this.paymentAllList
    this.paymentList = this.paymentList.filter(
      (item: any) => item.status === 'PENDING'
    );
  }
}
