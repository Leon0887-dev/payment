import { PaymentServiceService } from './../service/payment-service.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { dateValidatorEdit } from '../scheduling/date.validator';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
})
export class AppointmentListComponent implements OnInit {
  paymentAllList!: any;
  paymentList!: any;
  paymentForm!: FormGroup;
  paymentItem!: any;
  count = 0;

  constructor(
    private paymentService: PaymentServiceService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllPayments();

    this.paymentForm = this.formBuilder.group({
      paymentValue: [
        ,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/
          ),
        ]),
      ],
      paymentDate: ['', [Validators.required, dateValidatorEdit]],
      description: ['', Validators.minLength(3)],
      paymentHours: ['', Validators.required],
    });
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

    this.paymentItem = item;

    this.paymentForm.controls['paymentDate'].setValue(
      moment(this.paymentItem.paymentDate).format('DD/MM/YYYY')
    );
    this.paymentForm.controls['paymentValue'].setValue(
      this.paymentItem.paymentValue
    );
    this.paymentForm.controls['paymentHours'].setValue(
      this.paymentItem.paymentHours
    );
  }

  get dateValue() {
    return this.paymentForm.get('paymentDate')?.value;
  }

  get paymentHoursValue() {
    return this.paymentForm.get('paymentHours')?.value;
  }

  formaterDateHours() {
    const hours = this.paymentForm.get('paymentHours')?.value ?? '';
    let date = this.paymentForm.get('paymentDate')?.value;

    let m = moment(date, 'DD/MM/YYYY');

    let dateFormated = m.format('DD-MM-YYYY');

    return `${dateFormated} ${hours}`;
  }

  saveEditPayment() {
    let obj = {
      paymentDate: this.formaterDateHours(),
    };
    this.paymentService
      .updatePayments(this.paymentItem.id, obj)
      .subscribe((res) => {
        this.closeModal();
        location.reload();
      });
  }

  openDeletePayment(item: any, modal: TemplateRef<any>) {
    this.modalService.open(modal);
    this.paymentItem = item;
  }

  deleteoPayment() {
    this.paymentService.deletePayment(this.paymentItem.id).subscribe((res) => {
      console.log('deletou');
      this.closeModal();
      location.reload();
    });
  }

 
  tableSort() {
    if(this.count > 2) this.count = 0;
    switch (this.count){
      case 0:
        this.paymentAllList.sort((a,b) => a.paymentValue - b.paymentValue);
        break;
      case 1:
        this.paymentAllList.sort((a,b) => b.paymentValue - a.paymentValue);
        break;
      case 2: 
         this.getAllPayments();
         break;
    }
    
    this.count ++
  }

  closeModal() {
    this.modalService.dismissAll();
  }
}
