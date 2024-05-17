import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { LoansService } from '../services/loans.service';

interface Customer {
  name: string;
  email: string;
  phone: string;
}

interface Loan {
  amount: number;
  date: string;
  status: string;
}

interface LoanStatus {
  id: number;
  amount: number;
  status: string;
}

interface LoanType {
  type: string;
  interestRate: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  totalCustomers: number;
  totalInvoices: number = 300;
  pendingLoans: number = 150;
  approvedLoans: number = 350;

  customerList: any;
  displayedCustomers: any[];

  loanslist: any;
  displayedloans: any;
  totalLoans: number ;



  loanStatus: LoanStatus[] = [];
  loanTypes: LoanType[] = [];

  constructor(private cutsomerService: CustomerService,
    private loanService: LoansService) {
    // Generate random loan status data
   

    // Generate random loan types data
    const types = ['Personal Loan', 'Business Loan', 'Home Loan', 'Car Loan'];
    for (let type of types) {
      this.loanTypes.push({
        type: type,
        interestRate: Math.floor(Math.random() * 10) + 5,
      });
    }
  }
  ngOnInit(): void {
    this.getCustomerList();
    this.getLoanList();
  }

  getCustomerList() {
    this.cutsomerService.getCustomers().subscribe((data) => {
      if (data) {
        this.customerList = data;
        if (this.customerList.users.length) {
          this.totalCustomers = this.customerList.users.length;
          this.displayedCustomers = this.customerList.users.slice(0, 3);
        }
      }

      console.log('this.customers', this.displayedCustomers);
    });
  }

  getLoanList() {
    this.loanService.getallloanss().subscribe(data => {
      if(data) {
        console.log("data", data)
        this.loanslist = data
        this.displayedloans = this.loanslist.loans;

        // this.loanStatus = this.displayedloans.map((data: any) => {

        //   id: data._id,
        //   amount: data.amount
        // })
  
        console.log("this.loanStatus", this.loanStatus)

        this.totalLoans = this.displayedloans.length;
      }
      
      console.log("this.displayedloans", this.displayedloans)
    })
  }
}
