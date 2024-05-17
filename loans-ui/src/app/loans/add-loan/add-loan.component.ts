import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoansService } from 'src/app/services/loans.service';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.scss'],
})
export class AddLoanComponent implements OnInit {

  loanTypes: string[] = ['Personal Loan', 'Home Loan', 'Car Loan'];

  loanCompanies: string[] = [
    'Wells Fargo',
    'Chase Bank',
    'Bank of America',
    'Citibank',
    'Discover Personal Loans',
    'SoFi',
    'LendingClub',
    'Marcus by Goldman Sachs',
    'Rocket Loans',
    'LightStream',
    'OneMain Financial',
    'Upstart',
    'Avant',
    'Prosper',
    'FreedomPlus',
    'Earnest',
    'Best Egg',
    'Upgrade',
    'PenFed Credit Union',
    'Navy Federal Credit Union',
  ];

  loanForm: FormGroup;

  responseMessage: any;
  
  constructor(private fb: FormBuilder, private loanService: LoansService) {}

  ngOnInit(): void {
    this.loanForm = this.fb.group({
      customerId: ['', Validators.required],
      loantype: ['', Validators.required],
      loanname: ['', Validators.required],
      loanamount: [0, [Validators.required, Validators.min(0)]],
      loanstatus: ['', Validators.required],
      loanissuedate: [new Date(), Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loanForm.valid) {
      const loanData = this.loanForm.value;

      console.log('bookData', loanData);

      this.loanService.createloan(loanData).subscribe(
        (response) => {
          console.log('responseresponseresponse', response);
          this.responseMessage = response.message;
        },
        (error) => {
          console.error(error);
          this.responseMessage = 'Failed to create the user.';
        }
      );
    } else {
      // Handle form validation errors
      console.error('Form validation failed.');
    }
  }
}
