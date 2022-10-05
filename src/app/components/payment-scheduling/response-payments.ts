import { CreatePayment } from './create-payment';

export interface ResponsePayments {
  content: CreatePayment[];
  pageable: any;
  sort: any;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
}
