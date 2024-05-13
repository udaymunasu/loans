import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  gmailNotifications: boolean = true;
  smsAlerts: boolean = false;
  darkMode: boolean = true;
  pushNotifications: boolean = true;
  locationTracking: boolean = false;
  biometricAuth: boolean = false;
  autoSync: boolean = true;
  showImages: boolean = true;
  soundEffects: boolean = false;
  inAppNotifications: boolean = true;
  reminders: boolean = false;
  selectedLanguage: string = 'english'; // default language
  constructor() { }

  ngOnInit(): void {
  }

}
