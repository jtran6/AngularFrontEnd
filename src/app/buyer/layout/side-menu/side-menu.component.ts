import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    // Make this component dynamic by pulling in whatever is clicked on and getting all submenus
    this.items = [
      // these items should be dynamic
      {label: 'New', icon: 'fa fa-fw fa-plus'},
      {label: 'Open', icon: 'fa fa-fw fa-download'},
      {label: 'Undo', icon: 'fa fa-fw fa-refresh'}
  ];
  }

}
