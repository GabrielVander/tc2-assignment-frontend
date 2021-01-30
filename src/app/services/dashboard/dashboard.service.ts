import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import '../../models/ApiResponse';
import {API_ENDPOINT} from '../../models/Constants';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private $totalSold = new BehaviorSubject<number>(0);
  private $numberOfOrders = new BehaviorSubject<number>(0);
  private $numberOfCustomers = new BehaviorSubject<number>(0);
  private $totalAnimalsServed = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {
    this.updateTotalSold();
    this.updateNumberOfCustomers();
    this.updateNumberOfOrders();
    this.updateTotalAnimalsServed();
  }

  get totalSold(): BehaviorSubject<number> {
    return this.$totalSold;
  }

  get numberOfOrders(): BehaviorSubject<number> {
    return this.$numberOfOrders;
  }

  get numberOfCustomers(): BehaviorSubject<number> {
    return this.$numberOfCustomers;
  }

  get totalAnimalsServed(): BehaviorSubject<number> {
    return this.$totalAnimalsServed;
  }

  public updateTotalSold(): void {
    this.http
      .get<ApiResponse>(`${API_ENDPOINT}/order/totalPrice`)
      .toPromise()
      .then(value => {
        this.$totalSold.next(value.data.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
      });
  }

  public updateNumberOfOrders(): void {
    this.http
      .get<ApiResponse>(`${API_ENDPOINT}/order`)
      .toPromise()
      .then(value => {
        this.$numberOfOrders.next(value.count);
      });
  }

  public updateNumberOfCustomers(): void {
    this.http
      .get<ApiResponse>(`${API_ENDPOINT}/customer`)
      .toPromise()
      .then(value => {
        this.$numberOfCustomers.next(value.count);
      });
  }

  public updateTotalAnimalsServed(): void {
    this.http
      .get<ApiResponse>(`${API_ENDPOINT}/animal`)
      .toPromise()
      .then(value => {
        this.$totalAnimalsServed.next(value.count);
      });
  }
}
