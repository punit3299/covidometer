import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covidmain',
  templateUrl: './covidmain.component.html',
  styleUrls: ['./covidmain.component.css']
})
export class CovidmainComponent implements OnInit {

  covidData;
  flag: boolean = true;
  confirmed;
  deltaConfirmed;
  active;
  recovered;
  deltaRecovered;
  deaths; 
  deltaDeaths; 
  state:string;
  public loading = false;

  constructor(private covidService: CovidService, private router: Router) { }


  ngOnInit() { 
 
    this.loading=true;
    this.covidService.getData().subscribe(data => {
      this.covidData = data;
      this.confirmed=this.covidData.statewise[0].confirmed;
      this.deltaConfirmed=this.covidData.statewise[0].deltaconfirmed;
      this.active=this.covidData.statewise[0].active;
      this.recovered=this.covidData.statewise[0].recovered;
      this.deltaRecovered=this.covidData.statewise[0].deltarecovered;
      this.deaths=this.covidData.statewise[0].deaths;
      this.deltaDeaths=this.covidData.statewise[0].deltadeaths;

      this.loading = false;
    })
  }

  setState(state,statecode) {
    this.router.navigate(['state', state]);
    sessionStorage.statecode=statecode;
  }

  // sortByNameUp() {
  //   this.covidData.statewise.sort((a, b) => (a.state < b.state ? -1 : 1));
  //   this.flag = true;
  // }
  // sortByNameDown() {
  //   this.covidData.statewise.sort((a, b) => (a.state > b.state ? -1 : 1));
  //   this.flag = false;
  // }  

  sortByConfirmedUp() {
    this.covidData.statewise.sort(function (a, b) { return parseInt(b.confirmed) - parseInt(a.confirmed); });
    this.flag = true;
  }
  sortByConfirmedDown() {
    this.covidData.statewise.sort(function (a, b) { return parseInt(a.confirmed) - parseInt(b.confirmed); });
    this.flag = false;
  }

  sortByActiveUp() {
    this.covidData.statewise.sort(function (a, b) { return parseInt(b.active) - parseInt(a.active); });
    this.flag = true;
  }

  sortByActiveDown() {
    this.covidData.statewise.sort(function (a, b) { return parseInt(a.active) - parseInt(b.active); });
    this.flag = false;
  }

  sortByRecoveredUp() {
    this.covidData.statewise.sort(function (a, b) { return parseInt(b.recovered) - parseInt(a.recovered); });
    this.flag = true;
  }

  sortByRecoveredDown() {
    this.covidData.statewise.sort(function (a, b) { return parseInt(a.recovered) - parseInt(b.recovered); });
    this.flag = false;
  }

  sortByDeathsUp() {
    this.covidData.statewise.sort(function (a, b) { return parseInt(b.deaths) - parseInt(a.deaths); });
    this.flag = true;
  }
  sortByDeathsDown() {
    this.covidData.statewise.sort(function (a, b) { return parseInt(a.deaths) - parseInt(b.deaths); });
    this.flag = false;
  }



}
