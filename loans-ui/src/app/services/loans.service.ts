import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class LoansService {

  constructor(private httpClient: HttpClient) { }

  createloan(formData: any) {
    let url = environment.LOAN_BASE_URL + environment.LOAN.APPLY_LOAN;
    console.log("data LOANs from service", formData)
    return this.httpClient.post<any>(" http://localhost:3000/loan/applyloan", formData);
  }

  getallloanss() {
    let url =
      environment.LOAN_BASE_URL + environment.LOAN.GET_ALL_LOANS;
    return this.httpClient.get(url);
  }

  viewloan(id) {
    let url = environment.LOAN_BASE_URL + environment.LOAN.GET_LOANS +`/${id}`;
    return this.httpClient.get(url);
  }

  editLoan(product: any) {
    console.log("product service", product)
    let url = environment.LOAN_BASE_URL + environment.LOAN.EDIT_LOANS +`/${product.id}`;
    return this.httpClient.put<any>(
      url,
      product
    );
  }

  getByCustomerId(id) {
    return this.httpClient.get(`http://localhost:3000/loan/getbycustomer/${id}`);
  }
}
