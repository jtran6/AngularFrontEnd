import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isDashboardHome: boolean;
  isDashboardReport: boolean;

  constructor() { }

  ngOnInit() {
    this.isDashboardHome = true;
    this.isDashboardReport = false;
  }

}
