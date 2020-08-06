import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidmainComponent } from './components/covidmain/covidmain.component';
import { Covid19Component } from './components/covid19/covid19.component';
import { DonateComponent } from './components/donate/donate.component';
import { ChartComponent } from './components/chart/chart.component';
import { DistrictComponent } from './components/district/district.component';
import { DistricttableComponent } from './components/districttable/districttable.component';
import { DistrictchartComponent } from './components/districtchart/districtchart.component';
import { ZonesComponent } from './components/zones/zones.component';


const routes: Routes = [
  { path: 'main', component: CovidmainComponent },
  { path: 'covid19', component: Covid19Component },
  { path: 'donate', component: DonateComponent },
  { path: 'zones', component: ZonesComponent },
  { path: 'chart', component: ChartComponent }, 
  {
    path: 'state/:state', component: DistrictComponent, children: [
      { path: 'dtable', component: DistricttableComponent },
      { path: 'chart', component: DistrictchartComponent},
      { path: '**', component: DistricttableComponent }
    ]
  },
  { path: '**', component: CovidmainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
