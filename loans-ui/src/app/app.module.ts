import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';


import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
