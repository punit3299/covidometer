import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-districttable',
  templateUrl: './districttable.component.html',
  styleUrls: ['./districttable.component.css']
})
export class DistricttableComponent implements OnInit {

  stateData;
  districtData;
  currentState=sessionStorage.state;
  flag: boolean = true;
  district:string;
  
  constructor(private covidService: CovidService) { }

  ngOnInit() {
    this.covidService.getDistrictsData().subscribe(data => {
      this.stateData = data;

      for (let i = 0; i < this.stateData.length; i++) {
        if (this.stateData[i].state == this.currentState) {
          this.districtData = this.stateData[i].districtData;
        }
      }
    })
  }

  sortByConfirmedUp() {
    this.districtData.sort(function (a, b) { return parseInt(b.confirmed) - parseInt(a.confirmed); });
    this.flag = true;
  }
  sortByConfirmedDown() {
    this.districtData.sort(function (a, b) { return parseInt(a.confirmed) - parseInt(b.confirmed); });
    this.flag = false;
  }

  sortByActiveUp() {
    this.districtData.sort(function (a, b) { return parseInt(b.active) - parseInt(a.active); });
    this.flag = true;
  }

  sortByActiveDown() {
    this.districtData.sort(function (a, b) { return parseInt(a.active) - parseInt(b.active); });
    this.flag = false;
  }

  sortByRecoveredUp() {
    this.districtData.sort(function (a, b) { return parseInt(b.recovered) - parseInt(a.recovered); });
    this.flag = true;
  }

  sortByRecoveredDown() {
    this.districtData.sort(function (a, b) { return parseInt(a.recovered) - parseInt(b.recovered); });
    this.flag = false;
  }

  sortByDeathsUp() {
    this.districtData.sort(function (a, b) { return parseInt(b.deceased) - parseInt(a.deceased); });
    this.flag = true;
  }
  sortByDeathsDown() {
    this.districtData.sort(function (a, b) { return parseInt(a.deceased) - parseInt(b.deceased); });
    this.flag = false;
  }

}
