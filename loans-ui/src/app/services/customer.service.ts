import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev';
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {}

  createCustomer(formData: any) {
    let url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.ADD_CUSTOMER;
    console.log("data customers from service", formData)
    return this.httpClient.post<any>(" http://localhost:3000/customer/add", formData);
  }

  getCustomers() {
    let url =
      environment.CUSTOMER_BASE_URL + environment.CUSTOMER.GET_ALL_CUSTOMERS;
    return this.httpClient.get(url);
  }

  viewCustomer(id) {
    let url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.GET_CUSTOMERS +`/${id}`;
    return this.httpClient.get(url);
  }

  editCustomer(id, updatedObj) {}

  deleteCustomer(id) {}

  searchCustomer(keyword) {}
}
