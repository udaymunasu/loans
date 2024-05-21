import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { LoansComponent } from './loans.component';
import { ListLoansComponent } from './list-loans/list-loans.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { LoanEditComponent } from './loan-edit/loan-edit.component';


@NgModule({
  declarations: [
    LoansComponent,
    ListLoansComponent,
    AddLoanComponent,
    LoanDetailsComponent,
    LoanEditComponent
  ],
  imports: [
    CommonModule,
    LoansRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoansModule { }
