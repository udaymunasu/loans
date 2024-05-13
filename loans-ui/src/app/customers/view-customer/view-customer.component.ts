import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private customersService: CustomerService) { }

  customerId: string = '';
  customer: any
  customerDetails: any

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      this.customerId = data.id
    })

    if (this.customerId) {
      // Fetch customer details
      this.customersService.viewCustomer(this.customerId).subscribe(data => {
        // Check if data is received successfully
        if (data && data['user']) {
          this.customerDetails = data;
          this.customer = this.customerDetails['user'];
          console.log("data customer", this.customer);
        } else {
          console.error('Customer data not found');
        }
      }, error => {
        console.error('Error fetching customer details:', error);
      });
    } else {
      console.error('Customer ID is undefined or null');
    }
  }

}
