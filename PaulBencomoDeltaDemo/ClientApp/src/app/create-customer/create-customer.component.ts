import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-counter-component',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomer {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  clickedit(f: NgForm) {

    this.http.post<boolean>(this.baseUrl + 'Customer/Create', f.value).subscribe(result => {
      f.resetForm();
    }, error => console.error(error));

    console.log(f.value);
  }

  ngOnInit() {
  }
}

