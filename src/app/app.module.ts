import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { GeneralComponent } from './pages/general/general.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { OrderComponent } from './pages/order/order.component';
import { CustomerTableComponent } from './pages/customer/components/customer-table/customer-table.component';
import { RegisterCustomerComponent } from './pages/customer/components/register-customer/register-customer.component';
import { CpfPipe } from './pipes/cpf/cpf.pipe';
import { AnimalsFormComponent } from './pages/customer/components/animals-form/animals-form.component';
import { AnimalTableComponent } from './pages/customer/components/animal-table/animal-table.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    CustomerComponent,
    OrderComponent,
    CustomerTableComponent,
    RegisterCustomerComponent,
    CpfPipe,
    AnimalsFormComponent,
    AnimalTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    NzCardModule,
    NzButtonModule,
    NzTableModule,
    NzDropDownModule,
    NzDividerModule,
    NzInputModule,
    NzModalModule,
    NzFormModule,
    ReactiveFormsModule,
    NzPopconfirmModule,
    NzTabsModule,
    NzInputNumberModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
