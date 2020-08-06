import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  covidData;
  confirmedArray = [];
  activeArray = [];
  recoveredArray = []; 
  deathsArray = [];

  todaysDate = new Date();

  constructor(private covidService: CovidService) {
    setInterval(() => {
      this.todaysDate = new Date();
    }, 1000);
  }

  ngOnInit() {

    this.covidService.getData().subscribe(data => {
      //console.log(data);
      this.covidData = data;
      for (let i = 1; i < this.covidData.statewise.length; i++) {
        this.confirmedArray.push(parseInt(this.covidData.statewise[i].confirmed));
        this.activeArray.push(parseInt(this.covidData.statewise[i].active));
        this.recoveredArray.push(parseInt(this.covidData.statewise[i].recoverd));
        this.deathsArray.push(parseInt(this.covidData.statewise[i].deaths));
      }


      this.confirmedArray.sort(function (a, b) { return b - a; });
      this.confirmedArray.sort(function (a, b) { return b - a; });
      this.confirmedArray.sort(function (a, b) { return b - a; });
      this.confirmedArray.sort(function (a, b) { return b - a; });

    })
  }

}