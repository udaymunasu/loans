import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { LoansService } from 'src/app/services/loans.service';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.scss'],
})
export class LoanDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private customersService: CustomerService,
    private loanService: LoansService
  ) {}

  loanId: string = '';
  loan: any;
  loanDetails: any;

  allLoans: any;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      this.loanId = data.id;
    });

    if (this.loanId) {
      // Fetch customer details
      this.loanService.viewloan(this.loanId).subscribe(
        (data) => {
          // Check if data is received successfully
          if (data && data['loan']) {
            this.loanDetails = data;
            this.loan = this.loanDetails['loan'];
            this.getAllCustomerLoans(this.loan.customerId)
            console.log('data loan', this.loan);
          } else {
            console.error('Customer data not found');
          }
        },
        (error) => {
          console.error('Error fetching customer details:', error);
        }
      );
    } else {
      console.error('Customer ID is undefined or null');
    }
  }

  getAllCustomerLoans(customerId) {
    if (customerId) {
      // Fetch customer details
      this.loanService.getByCustomerId(customerId).subscribe(
        (data) => {
          // Check if data is received successfully
          if (data && data['loan']) {
            this.allLoans = data['loan'];
            console.log('All Loans', this.allLoans);
          } else {
            console.error('Customer data not found');
          }
        },
        (error) => {
          console.error('Error fetching All loans:', error);
        }
      );
    } else {
      console.error('Customer ID is undefined or null');
    }
  }
}
