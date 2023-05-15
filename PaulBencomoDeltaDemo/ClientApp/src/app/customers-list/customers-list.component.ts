import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
})
export class CustomersList {
  public cList: CustomerItem[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<CustomerItem[]>(baseUrl + 'Customer/GetList').subscribe(result => {
      this.cList = result;
    }, error => console.error(error));
  }
}

export interface CustomerItem {
  id: number;
  name: string;
  telephone: string;
  email: string;
  notes: string;
}
