import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './loans.component';
import { ListLoansComponent } from './list-loans/list-loans.component';

const routes: Routes = [
  { path: '', component: LoansComponent },
  { path: 'list-loans', component: ListLoansComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoansRoutingModule {}
