import { Component } from '@angular/core';
import {OrderService} from '../../../../services/order/order.service';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html'
})
export class OrderTableComponent {

  loadingTable: boolean;
  orderTable: Order[];

  constructor(private orderService: OrderService) {
    orderService.orders.subscribe(value => this.orderTable = value);
    orderService.loadingOrderTable.subscribe(value => this.loadingTable = value);

  }
}
