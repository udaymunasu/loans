import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss'],
})
export class ListCustomersComponent implements OnInit {
  constructor(private customerService: CustomerService) {
  }
  ngOnInit(): void {
    this.getCustomerList();
  }

  customers: any

  displayedCustomers: any;
  customerList: any
  searchText: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;
  

  getCustomerList() {
    this.customerService.getCustomers().subscribe(data => {
      if(data) {
        this.customerList = data
        this.displayedCustomers = this.customerList.users;
      }
      
      console.log("this.customers", this.displayedCustomers)
    })
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
    // if (this.currentPage < this.totalPages) {
    //   this.currentPage++;
    //   this.updateDisplayedCustomers();
    // }
  }

  updateDisplayedCustomers() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedCustomers = this.customers.slice(startIndex, endIndex);
  }

  // get totalPages(): number {
  //   return Math.ceil(this.displayedCustomers.length / this.itemsPerPage);
  // }
}
