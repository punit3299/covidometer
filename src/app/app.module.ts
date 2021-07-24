import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { Covid19Component } from './components/covid19/covid19.component';
import { CovidmainComponent } from './components/covidmain/covidmain.component';
import { ChartComponent } from './components/chart/chart.component';
import { DistrictComponent } from './components/district/district.component';
import { DistricttableComponent } from './components/districttable/districttable.component';
import { DistrictchartComponent } from './components/districtchart/districtchart.component';
import { ZonesComponent } from './components/zones/zones.component';
import { FormsModule} from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { HeaderComponent } from './components/header/header.component';
import { StatesearchPipe } from './pipes/statesearch.pipe';
import { DistrictsearchPipe } from './pipes/districtsearch.pipe';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Covid19Component,
    CovidmainComponent,
    ChartComponent,
    DistrictComponent,
    DistricttableComponent,
    DistrictchartComponent,
    ZonesComponent,
    SearchPipe,
    HeaderComponent,
    StatesearchPipe,
    DistrictsearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
