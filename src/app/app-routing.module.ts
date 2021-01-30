import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GeneralComponent} from './pages/general/general.component';
import {CustomerComponent} from './pages/customer/customer.component';
import {OrderComponent} from './pages/order/order.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'general'},
  {path: 'general', component: GeneralComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'order', component: OrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
