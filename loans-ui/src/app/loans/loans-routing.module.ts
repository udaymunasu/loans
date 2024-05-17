import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './loans.component';
import { ListLoansComponent } from './list-loans/list-loans.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { AddLoanComponent } from './add-loan/add-loan.component';

const routes: Routes = [
  { path: '', component: LoansComponent },
  { path: 'applyloan', component: AddLoanComponent },
  { path: 'list-loans', component: ListLoansComponent },
  { path: 'view/:id', component: LoanDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoansRoutingModule {}
