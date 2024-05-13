import { Component, OnInit } from '@angular/core';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
})
export class InvoicesComponent implements OnInit {
  ngOnInit(): void {}

  customers: Customer[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane@example.com',
      phone: '987-654-3210',
    },
    // Add more customers here
  ];

  displayedInvoices: Customer[];
  searchText: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor() {
    this.displayedInvoices = this.customers.slice(0, this.itemsPerPage);
  }

  addCustomer() {
    // Add your logic to add a new customer
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedCustomers();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedCustomers();
    }
  }

  updateDisplayedCustomers() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedInvoices = this.customers.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.customers.length / this.itemsPerPage);
  }
}
