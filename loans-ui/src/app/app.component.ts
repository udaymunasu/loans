import { ThisReceiver } from '@angular/compiler';
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ElementRef,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ThemeService } from './theme.service';
// import {BNYMegalMenuItem, MenuTransformSvc} from "@wmt/components";
// import {FeatureValidatorEntity, FeatureValidatorSve} from "wmt/services";

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'icons';
  appName: String = 'Nothing';

  isSideNavCollapsed = false;
  screenWidth = 0;

  isDarkTheme = true;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {}

  toggleTheme() {
    this.themeService.toggleDarkTheme();
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
