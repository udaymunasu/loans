import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { LoansComponent } from './loans.component';
import { ListLoansComponent } from './list-loans/list-loans.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoansComponent,
    ListLoansComponent
  ],
  imports: [
    CommonModule,
    LoansRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoansModule { }
