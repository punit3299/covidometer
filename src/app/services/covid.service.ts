import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService { 

  url = "https://api.covid19india.org/data.json";
  url1="https://api.covid19india.org/raw_data4.json";
  url2="https://api.covid19india.org/v2/state_district_wise.json";
  url3="https://api.covid19india.org/states_daily.json";
  url4="https://api.covid19india.org/zones.json";
  
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(this.url);
  }

  getStatsData(){
    return this.http.get(this.url1);
  }

  getDistrictsData(){
    return this.http.get(this.url2);
  }

  getDistrictChart(){
    return this.http.get(this.url3);
  }

  getZonesData(){
    return this.http.get(this.url4);
  }

}
