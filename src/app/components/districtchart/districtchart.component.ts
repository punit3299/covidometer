import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-districtchart',
  templateUrl: './districtchart.component.html',
  styleUrls: ['./districtchart.component.css']
})
export class DistrictchartComponent implements OnInit {

  stateCode=sessionStorage.statecode;
  stateData;
  confirmed=[];
  recovered=[];
  deceased=[];
  date=[];

  constructor(private covidService:CovidService) { }

  ngOnInit() {
    this.covidService.getDistrictChart().subscribe(data=>{
      this.stateData=data;
      console.log(this.stateData.states_daily[0])
     
      for(let i = this.stateData.states_daily.length - 1, count = 0; i > 0 && count != 21; i--, count++){
        for(let key in this.stateData.states_daily[i]){
          if(key==sessionStorage.statecode.toLowerCase()){
           console.log(this.stateData.states_daily[i])
          }
        }
      }
    })

  }

}
 