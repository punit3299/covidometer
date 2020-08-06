import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  covidData;
  genderData;
  chart = [];
  dailyConfirmed = [];
  totalConfirmed = [];
  totalRecovered = [];
  totalDeaths = [];
  date = [];

  males: number = 0;
  females: number = 0;


  age = [];
  ageData = [];
  ageNotDisclosed: number = 0;

  public loading = false;

  constructor(private covidService: CovidService) {
  }

  ngOnInit() {
    
    this.loading=true;

    this.covidService.getData().subscribe(data => {
      this.covidData = data;

      for (let i = this.covidData.cases_time_series.length - 1, count = 0; i > 0 && count != 7; i--, count++) {
        this.totalConfirmed.push(this.covidData.cases_time_series[i].totalconfirmed);
        this.date.push(this.covidData.cases_time_series[i].date);
      }

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.date.reverse(),
          datasets: [
            {
              label: 'Total Confirmed Cases',
              backgroundColor: 'blue',
              borderColor: 'blue',
              data: this.totalConfirmed.reverse(),
              fill: false,
            }
          ]
        }
      })

      this.date = [];

      for (let i = this.covidData.cases_time_series.length - 1, count = 0; i > 0 && count != 7; i--, count++) {
        this.dailyConfirmed.push(this.covidData.cases_time_series[i].dailyconfirmed);
        this.date.push(this.covidData.cases_time_series[i].date);
      }

      this.chart = new Chart('canvas1', {
        type: 'line',
        data: {
          labels: this.date.reverse(),
          datasets: [
            {
              label: 'Daily Confirmed Cases',
              backgroundColor: 'red',
              borderColor: 'red',
              data: this.dailyConfirmed.reverse(),
              fill: false,
            }
          ]
        }
      })

      this.date = [];

      for (let i = this.covidData.cases_time_series.length - 1, count = 0; i > 0 && count != 7; i--, count++) {
        this.dailyConfirmed.push(this.covidData.cases_time_series[i].dailyconfirmed);
        this.date.push(this.covidData.cases_time_series[i].date);
      }

      this.chart = new Chart('canvas1', {
        type: 'line',
        data: {
          labels: this.date.reverse(),
          datasets: [
            {
              label: 'Daily Confirmed Cases',
              backgroundColor: 'red',
              borderColor: 'red',
              data: this.dailyConfirmed.reverse(),
              fill: false,
            }
          ]
        }
      })

      this.date = [];

      for (let i = this.covidData.cases_time_series.length - 1, count = 0; i > 0 && count != 7; i--, count++) {
        this.totalRecovered.push(this.covidData.cases_time_series[i].totalrecovered);
        this.date.push(this.covidData.cases_time_series[i].date);
      }

      this.chart = new Chart('canvas2', {
        type: 'line',
        data: {
          labels: this.date.reverse(),
          datasets: [
            {
              label: 'Patients Recovered Till Yet',
              backgroundColor: 'green',
              borderColor: 'green',
              data: this.totalRecovered.reverse(),
              fill: false,
            }
          ]
        }
      })

      this.date = [];

      for (let i = this.covidData.cases_time_series.length - 1, count = 0; i > 0 && count != 7; i--, count++) {
        this.totalDeaths.push(this.covidData.cases_time_series[i].totaldeceased);
        this.date.push(this.covidData.cases_time_series[i].date);
      }

      this.chart = new Chart('canvas3', {
        type: 'line',
        data: {
          labels: this.date.reverse(),
          datasets: [
            {
              label: 'Total Deaths Till Yet',
              backgroundColor: 'gray',
              borderColor: 'gray',
              data: this.totalDeaths.reverse(),
              fill: false,
            }
          ]
        }
      })

    })

    this.covidService.getStatsData().subscribe(data => {
      this.genderData = data;
      for (let i = 0; i < this.genderData.raw_data.length; i++) {
        if (this.genderData.raw_data[i].gender == "M") {
          this.males += 1;
        }
        else if (this.genderData.raw_data[i].gender == "F") {
          this.females += 1;
        }
      }

      this.chart = new Chart('pieChart', {
        type: 'doughnut',
        data: {
          labels: ['Males', 'Females'],
          datasets: [
            {
              label: 'Gender Wise Cases',
              backgroundColor: ['blue', 'pink'],
              borderColor: ['blue', 'pink'],
              data: [this.males, this.females],
              fill: true,
            }
          ]
        }
      })

      for (let i = 0; i < this.genderData.raw_data.length; i++) {
        this.age.push(this.genderData.raw_data[i].agebracket);
      }

      this.ageData.push(this.age.filter(x => x >= 1 && x <= 10).length);
      this.ageData.push(this.age.filter(x => x >= 11 && x <= 20).length);
      this.ageData.push(this.age.filter(x => x >= 21 && x <= 30).length);
      this.ageData.push(this.age.filter(x => x >= 31 && x <= 40).length);
      this.ageData.push(this.age.filter(x => x >= 41 && x <= 50).length);
      this.ageData.push(this.age.filter(x => x >= 51 && x <= 60).length);
      this.ageData.push(this.age.filter(x => x >= 61 && x <= 70).length);
      this.ageData.push(this.age.filter(x => x >= 71 && x <= 80).length);
      this.ageData.push(this.age.filter(x => x >= 81 && x <= 90).length);
      this.ageData.push(this.age.filter(x => x >= 91 && x <= 100).length);

      this.ageNotDisclosed = this.genderData.raw_data.length - this.ageData.reduce((x, y) => x + y);

      this.chart = new Chart('barChart', {
        type: 'bar',
        data: {
          labels: ['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100'],
          datasets: [
            {
              label: 'Age Wise Cases',
              backgroundColor: ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'],
              borderColor: ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'],
              data: this.ageData,
              fill: true,
            }
          ]
        }
      })

      this.loading = false;
      
    })


  }
}
