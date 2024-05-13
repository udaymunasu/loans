import { Component, OnInit } from '@angular/core';
import { navbarData } from './nav-data';

export interface NavbarItem {
  routeLink: string;
  icon: string;
  label: string;
  submenuLevel1?: NavbarItem[];
  submenuOpen?: boolean;
  showSubmenu? : boolean
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navbarData: NavbarItem[] = navbarData;
  constructor() { }
  dropdownOpen = false;

  ngOnInit(): void {
  }

  toggleSubmenu(item: NavbarItem): void {
    item.showSubmenu = !item.showSubmenu;
  }
}
