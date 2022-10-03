import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss'],
})
export class SchedulingComponent implements OnInit {
  paymentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

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
    });
  }

  schedulePayment() {
   

    console.log(this.paymentForm.getRawValue());
  }
}
