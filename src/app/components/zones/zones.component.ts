import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {

  chart = [];
  zoneData;
  states = new Map();
  green: number = 0;
  orange: number = 0;
  red: number = 0;
  currentState: string;
  searchText: string;
  districts = [];

  public loading=false;

  constructor(private covidService: CovidService) { }

  ngOnInit() {

    this.loading=true;

    this.covidService.getZonesData().subscribe(data => {
      this.zoneData = data;
      let curr_state_pointer = this.zoneData.zones[0].state;
      let count = 0;
      for (let i = 0; i < this.zoneData.zones.length; i++) {
        this.districts.push(this.zoneData.zones.district);
        if (this.zoneData.zones[i].state == curr_state_pointer) {
          this.states.set(this.zoneData.zones[i].state, ++count)
          if (this.zoneData.zones[i].zone == "Green") {
            this.green++;
          }
          else if (this.zoneData.zones[i].zone == "Orange") {
            this.orange++;
          }
          else {
            this.red++;
          }
        }
        else {
          curr_state_pointer = this.zoneData.zones[i].state;
          i--;
          count = 0;
        }
      }
 
      this.chart = new Chart('pieChart', {
        type: 'pie',
        data: {
          labels: ['Red Zone', 'Green Zone', 'Orange Zone'],
          datasets: [
            {
              label: 'Zone Distribution in India',
              backgroundColor: ['red', 'green', 'orange'],
              borderColor: ['red', 'green', 'orange'],
              data: [this.red, this.green, this.orange],
              fill: true,
            }
          ]
        }
      })
      this.loading=false;
    })
  }

  setState(state: string) {
    this.currentState = state;
  }

}
