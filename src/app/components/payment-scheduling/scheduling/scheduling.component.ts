import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss']
})
export class SchedulingComponent implements OnInit {

  paymentForm !: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      paymentValue: [''],
      paymentDate: [''],
      description: ['']
    })
  }
  
 schedulePayment(){
    console.log(this.paymentForm.getRawValue());
 }

}
