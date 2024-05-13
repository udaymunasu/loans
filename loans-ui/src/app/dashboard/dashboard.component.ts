import { Component, OnInit } from '@angular/core';


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
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  totalCustomers: number = 1000;
  totalLoans: number = 500;
  totalInvoices: number = 300;
  pendingLoans: number = 150;
  approvedLoans: number = 350;

  latestCustomers: Customer[] = [
    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { name: 'Jane Doe', email: 'jane@example.com', phone: '987-654-3210' },
    // Add more customers here
  ];

  latestLoans: Loan[] = [
    { amount: 1000, date: '2024-04-01', status: 'Approved' },
    { amount: 2000, date: '2024-04-02', status: 'Pending' },
    // Add more loans here
  ];

  loanStatus: LoanStatus[] = [];
  loanTypes: LoanType[] = [];

  constructor() {
    // Generate random loan status data
    for (let i = 1; i <= 10; i++) {
      this.loanStatus.push({
        id: i,
        amount: Math.floor(Math.random() * 10000) + 1000,
        status: Math.random() < 0.5 ? 'Approved' : 'Pending'
      });
    }

    // Generate random loan types data
    const types = ['Personal Loan', 'Business Loan', 'Home Loan', 'Car Loan'];
    for (let type of types) {
      this.loanTypes.push({
        type: type,
        interestRate: Math.floor(Math.random() * 10) + 5
      });
    }
  }
  ngOnInit(): void {
  }

}
