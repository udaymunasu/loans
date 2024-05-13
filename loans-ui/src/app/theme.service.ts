// theme.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject<boolean>(false);

  isDarkTheme$ = this.isDarkTheme.asObservable();

  constructor() {}

  toggleDarkTheme() {
    debugger
    this.isDarkTheme.next(!this.isDarkTheme.value);
  }
}
