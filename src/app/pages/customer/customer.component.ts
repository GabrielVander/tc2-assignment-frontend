import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
  }

  showModal(): void {
    this.customerService
      .toggleRegisterCustomerModal();
  }

}
