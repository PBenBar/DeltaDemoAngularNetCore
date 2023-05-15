import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CreateCustomer } from './create-customer/create-customer.component';
import { CustomersList } from './customers-list/customers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CreateCustomer,
    CustomersList
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'create-customer', component: CreateCustomer },
      { path: '', component: CustomersList },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
