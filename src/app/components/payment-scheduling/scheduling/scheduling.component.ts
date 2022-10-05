import { PaymentListService } from './../service/payment-list.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { PaymentServiceService } from '../service/payment-service.service';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss'],
})
export class SchedulingComponent implements OnInit {
  paymentForm!: FormGroup;
  date: any;
  scheduleList!: any ;


  constructor(
    private formBuilder: FormBuilder,
    private paymentService: PaymentServiceService,
    private paymentListService: PaymentListService,
  ) {

  }

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      paymentValue: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/
          ),
        ]),
      ],
      paymentDate: ['', [Validators.required]],
      description: ['', Validators.minLength(3)],
      paymentHours: ['', Validators.required],
    });
  }

  schedulePayment() {
    if (this.paymentForm.valid) {
      this.paymentService.createPayment(this.payload()).subscribe((res) => {
        console.log(res);
      },(error) => alert('agendamento inválido, digite os campos corretamente!'));      
    }

    this.readPayments();
    
  }

  formaterDateHours() {
    const hours = this.paymentForm.get('paymentHours')?.value ?? '';
    let date = this.paymentForm.get('paymentDate')?.value;

    let m = moment(date, 'DD/MM/YYYY');

    let dateFormated = m.format('DD-MM-YYYY');

    return `${dateFormated} ${hours}`;
  }

  payload() {
    const payloadPayments = {
      paymentValue: this.paymentForm.get('paymentValue')?.value ?? '',
      paymentDate: this.formaterDateHours(),
      description: this.paymentForm.get('description')?.value ?? '',
    };

    return payloadPayments;
  }

  readPayments(){
    this.paymentService.readPayments().subscribe((res)=> {
      this.paymentListService.paymentList = res.content
    })
  }
  
    
   
}
