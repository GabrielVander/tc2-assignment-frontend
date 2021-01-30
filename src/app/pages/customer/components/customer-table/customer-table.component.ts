import {Component} from '@angular/core';
import {CustomerService} from '../../../../services/customer/customer.service';
import '../../../../models/Customer';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent {
  searchValue = '';
  visible = false;
  loadingTable;
  listOfData: Customer[] = [];
  listOfDisplayData = [...this.listOfData];

  constructor(private customerService: CustomerService) {
    customerService
      .customerList
      .subscribe(value => {
        this.listOfData = value;
        this.listOfDisplayData = this.listOfData;
      });
    customerService
      .loadingCustomerTable
      .subscribe(value => this.loadingTable = value);
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData
      .filter((item: Customer) => item.name.indexOf(this.searchValue) !== -1);
  }

  deleteRow(id: string): void {
    this.customerService
      .deleteCustomer(id)
      .then(() => {
        this.customerService
          .updateCustomerList();
      });
  }
}
