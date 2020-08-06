import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  public loading = true;
  constructor() { }

  ngOnInit() {
    this.loading=false;
  }
 
}
