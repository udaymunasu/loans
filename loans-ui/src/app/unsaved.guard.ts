import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SearchCustomerComponent } from './customers/search-customer/search-customer.component';

@Injectable({
  providedIn: 'root',
})
export class UnsavedGuard implements CanDeactivate<SearchCustomerComponent> {
  canDeactivate(component: SearchCustomerComponent) {
    if (component.isDirty) {
      return window.confirm('You have unsaved changes. Sure u want to leave?');
    }
    return true;
  }
}
