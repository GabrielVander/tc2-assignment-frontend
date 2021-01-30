import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  public totalSold: number;
  public numberOfOrders: number;
  public numberOfCustomers: number;
  public totalAnimalsServed: number;

  constructor(private dashboardService: DashboardService) {
    dashboardService.totalSold.subscribe(value => this.totalSold = value);
    dashboardService.numberOfOrders.subscribe(value => this.numberOfOrders = value);
    dashboardService.numberOfCustomers.subscribe(value => this.numberOfCustomers = value);
    dashboardService.totalAnimalsServed.subscribe(value => this.totalAnimalsServed = value);
  }

  ngOnInit(): void {
  }

}
