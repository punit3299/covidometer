import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  public loading = true;
  constructor() { }

  ngOnInit() {
    this.loading=false;
  }
}
