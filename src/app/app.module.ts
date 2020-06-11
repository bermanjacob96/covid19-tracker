import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';

import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CountriesComponent,
    HomeComponent,
    DashboardCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
