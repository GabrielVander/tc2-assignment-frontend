import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINT} from '../../models/Constants';
import '../../models/CustomerResponse';
import '../../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private $customerList = new BehaviorSubject<Customer[]>([]);
  private $registerCustomerModalIsVisible = new BehaviorSubject<boolean>(false);
  private $loadingCustomerTable = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.updateCustomerList();
  }

  get customerList(): BehaviorSubject<Customer[]> {
    return this.$customerList;
  }

  get registerCustomerModalIsVisible(): BehaviorSubject<boolean> {
    return this.$registerCustomerModalIsVisible;
  }

  get loadingCustomerTable(): BehaviorSubject<boolean> {
    return this.$loadingCustomerTable;
  }

  public updateCustomerList(): void {
    this.toggleLoadingTable();

    this.http.get<CustomerResponse>(`${API_ENDPOINT}/customer`)
      .toPromise()
      .then(response => {
        this.$customerList.next(response.data);
        this.toggleLoadingTable();
      });
  }

  public toggleRegisterCustomerModal(): void {
    this.$registerCustomerModalIsVisible.next(!this.$registerCustomerModalIsVisible.value);
  }

  public toggleLoadingTable(): void {
    this.$loadingCustomerTable.next(!this.$loadingCustomerTable.value);
  }

  public async registerCustomer(customer: Customer): Promise<CustomerResponse> {
    return this.http
      .post<CustomerResponse>(
        `${API_ENDPOINT}/customer`,
        customer
      )
      .toPromise();
  }

  public async deleteCustomer(id: string): Promise<CustomerResponse> {
    return this.http
      .request<CustomerResponse>(
        'delete',
        `${API_ENDPOINT}/customer`,
        {
          body: {
            _id: id,
          },
        }
      )
      .toPromise();
  }
}
