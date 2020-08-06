import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  covidData;
  stateId;
  currentState;
  stateData;

  constructor(private covidService: CovidService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.currentState = params['state'];
      sessionStorage.state = this.currentState;
    })
  }

  ngOnInit() {

    this.covidService.getData().subscribe(data => {
      this.covidData = data;

      for (let i = 0; i < this.covidData.statewise.length; i++) {

        if (this.covidData.statewise[i].statecode == sessionStorage.statecode) {
          this.stateData = this.covidData.statewise[i];
          console.log(this.stateData)
          break;
        }
      }
    })
  }

  x() {
    this.router.navigate(['chart'], { relativeTo: this.route })
  }
}
