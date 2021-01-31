import {Component} from '@angular/core';
import {CustomerService} from '../../../../services/customer/customer.service';
import '../../../../models/Customer';

interface ItemData extends Customer {
  expand: boolean;
}

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent {
  searchValue = '';
  visible = false;
  loadingTable;
  listOfData: ItemData[] = [];
  listOfDisplayData = [...this.listOfData];

  constructor(private customerService: CustomerService) {
    customerService
      .customerList
      .subscribe(value => {
        this.listOfData = value.map(customer => ({
          ...customer,
          expand: false,
        }));
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
      .deleteCustomer(id);
  }

  edit(data: Customer): void {
    this.customerService.toggleRegisterCustomerModal();
    this.customerService.setEditingCustomer(data);
  }
}
