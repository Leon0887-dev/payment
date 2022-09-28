import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSchedulingComponent } from './payment-scheduling.component';

describe('PaymentSchedulingComponent', () => {
  let component: PaymentSchedulingComponent;
  let fixture: ComponentFixture<PaymentSchedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentSchedulingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
