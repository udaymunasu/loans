import { Component, OnInit } from '@angular/core';
import { LoansService } from 'src/app/services/loans.service';

@Component({
  selector: 'app-list-loans',
  templateUrl: './list-loans.component.html',
  styleUrls: ['./list-loans.component.scss']
})
export class ListLoansComponent implements OnInit {


  ngOnInit(): void {
    this.getCustomerList()
  }

  
  loanslist: any;

  displayedloans: any[];
  searchText: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor(private loanService: LoansService) {
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
    this.displayedloans = this.loanslist.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.loanslist?.length / this.itemsPerPage);
  }

  getCustomerList() {
    this.loanService.getallloanss().subscribe(data => {
      if(data) {
        console.log("data", data)
        this.loanslist = data
        this.displayedloans = this.loanslist.loans;
      }
      
      console.log("this.customers", this.displayedloans)
    })
  }

}
