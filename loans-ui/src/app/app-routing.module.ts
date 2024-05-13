import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NewUserComponent } from './auth/new-user/new-user.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchCustomerComponent } from './customers/search-customer/search-customer.component';
import { UnsavedGuard } from './unsaved.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: NewUserComponent },
  { path: 'forgot-password', component: ForgotComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'search', component: SearchCustomerComponent, canDeactivate: [UnsavedGuard] },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: 'payments',
    loadChildren: () =>
      import('./payments/payments.module').then((m) => m.PaymentsModule),
  },
  {
    path: 'invoices',
    loadChildren: () =>
      import('./invoices/invoices.module').then((m) => m.InvoicesModule),
  },
  {
    path: 'loans',
    loadChildren: () =>
      import('./loans/loans.module').then((m) => m.LoansModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'loan-types',
    loadChildren: () =>
      import('./loan-types/loan-types.module').then((m) => m.LoanTypesModule),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./reports/reports.module').then((m) => m.ReportsModule),
  },
  {
    path: 'activity',
    loadChildren: () =>
      import('./activity-audit/activity-audit.module').then(
        (m) => m.ActivityAuditModule
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
