import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {API_ENDPOINT} from '../../models/Constants';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private $loadingOrderTable = new BehaviorSubject<boolean>(false);
  private $showOrderModal = new BehaviorSubject<boolean>(false);
  private $orders = new BehaviorSubject<Order[]>([]);

  constructor(private http: HttpClient) {
    this.updateOrderTable();
  }

  get orders(): BehaviorSubject<Order[]> {
    return this.$orders;
  }

  get loadingOrderTable(): BehaviorSubject<boolean> {
    return this.$loadingOrderTable;
  }

  get showOrderModal(): BehaviorSubject<boolean> {
    return this.$showOrderModal;
  }

  openOrderModal(): void {
    this.$showOrderModal.next(true);
  }

  closeOrderModal(): void {
    this.$showOrderModal.next(false);
  }

  updateOrderTable(): void {
    this.$loadingOrderTable.next(true);
    this.http
      .get<{ data: Order[] }>(`${API_ENDPOINT}/order`)
      .toPromise()
      .then((response) => {
        this.$orders.next(response.data);
        this.$loadingOrderTable.next(false);
      });
  }
}
