import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './invoices.component';
import { ListInvoicesComponent } from './list-invoices/list-invoices.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InvoicesComponent,
    ListInvoicesComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InvoicesModule { }
