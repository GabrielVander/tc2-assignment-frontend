import { Component } from '@angular/core';
import {OrderService} from '../../../../services/order/order.service';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html'
})
export class OrderModalComponent {
  isVisible = false;

  constructor(private orderService: OrderService) {
    orderService.showOrderModal.subscribe(value => this.isVisible = value);
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.orderService.closeOrderModal();
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.orderService.closeOrderModal();
  }
}
