import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoansService } from 'src/app/services/loans.service';

@Component({
  selector: 'app-loan-edit',
  templateUrl: './loan-edit.component.html',
  styleUrls: ['./loan-edit.component.scss'],
})
export class LoanEditComponent implements OnInit {
  loanForm: FormGroup;
  loanId: any;
  loanData: undefined | any;
  loanMessage;

  LoanStatus: string[] = ['Pending', 'Approved', 'Rejected'];

  constructor(
    private route: ActivatedRoute,
    private loanService: LoansService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loanForm = this.fb.group({
      loanamount: [''],
      loanissuedate: [''],
      loanname: [''],
      loanstatus: [''],
    });

    this.loanId = this.route.snapshot.paramMap.get('id');
    console.log('this.loanId', this.loanId);
    if (this.loanId) {
      this.loanService.viewloan(this.loanId).subscribe((loan: any) => {
        this.loanData = loan.loan;
        console.log('this.loanData ', this.loanData);
        this.patchFormWithloanData();
      });
    }

    this.loanForm.get('loanstatus')?.valueChanges.subscribe((value) => {
      console.log('loanstatus changes', value);
    });
  }

  patchFormWithloanData() {
    this.loanForm.patchValue({
      loanamount: this.loanData?.loanamount || '',
      loanname: this.loanData?.loanname || '',
      loanstatus: this.loanData?.loanstatus || '',
    });
  }

  submit() {
    let data = this.loanForm.value;
    console.log('loanData updated data', data);
    if (data && data.loanstatus) {
      data.id = this.loanData._id;
      this.loanService.editLoan(data).subscribe((result) => {
        if (result) {
          this.loanMessage = 'Product has been updated';
          setTimeout(() => {
            this.loanMessage = undefined;
          }, 3000);
        }
      });
    }
  }
}
