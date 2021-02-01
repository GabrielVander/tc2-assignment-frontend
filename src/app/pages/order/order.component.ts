import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../services/order/order.service';
import '../../models/Order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
  }

  showModal(): void {
    this.orderService.openOrderModal();
  }
}
