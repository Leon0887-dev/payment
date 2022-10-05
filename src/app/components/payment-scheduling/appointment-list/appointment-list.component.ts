import { PaymentServiceService } from './../service/payment-service.service';
import { PaymentListService } from './../service/payment-list.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

  paymentList!: any;

  constructor( private paymentService: PaymentServiceService ) {
   }

  ngOnInit(): void {
      this.paymentService.readPayments().subscribe(res =>{
        this.paymentList = res.content
      })
    }
    
  }




