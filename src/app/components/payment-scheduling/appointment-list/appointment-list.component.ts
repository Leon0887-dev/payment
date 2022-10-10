import { PaymentServiceService } from './../service/payment-service.service';
import { PaymentListService } from './../service/payment-list.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
})
export class AppointmentListComponent implements OnInit {
  paymentAllList!: any;
  paymentList!: any;

  paymentForm!: FormGroup;

  constructor(
    private paymentService: PaymentServiceService,
    private modalService: NgbModal,
    private
  ) {}

  ngOnInit(): void {
    this.getAllPayments();
  }

  openModal(modal: TemplateRef<any>) {
    this.modalService.open(modal);
  }

  getAllPayments() {
    this.paymentService.readPayments().subscribe((res) => {
      this.paymentAllList = res.content;
      this.paymentList = this.paymentAllList;
    });
  }

  getPaid() {
    this.paymentList = this.paymentAllList;
    this.paymentList = this.paymentList.filter(
      (item: any) => item.status === 'PAID'
    );
  }

  getPending() {
    this.paymentList = this.paymentAllList;
    this.paymentList = this.paymentList.filter(
      (item: any) => item.status === 'PENDING'
    );
  }

  editPayment(item: any, modal: TemplateRef<any>) {
    this.modalService.open(modal);
    console.log(this.paymentList[item.id].paymentValue);
    console.log(this.paymentList[item.id].paymentDate);
  }
}
