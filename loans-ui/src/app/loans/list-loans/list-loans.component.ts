import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-loans',
  templateUrl: './list-loans.component.html',
  styleUrls: ['./list-loans.component.scss']
})
export class ListLoansComponent implements OnInit {


  ngOnInit(): void {
  }

  
  loans: any[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '987-654-3210' },
    // Add more loans here
  ];

  displayedloans: any[];
  searchText: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor() {
    this.displayedloans = this.loans.slice(0, this.itemsPerPage);
  }

  addLoan() {
    // Add your logic to add a new customer
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedloans();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedloans();
    }
  }

  updateDisplayedloans() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedloans = this.loans.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.loans.length / this.itemsPerPage);
  }

}
