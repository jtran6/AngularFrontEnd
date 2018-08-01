import {
  Component,
  OnInit
} from '@angular/core';
import {
  MenuItem
} from 'primeng/api';

@Component({
  selector: 'app-menu-tab',
  templateUrl: './menu-tab.component.html',
  styleUrls: ['./menu-tab.component.css']
})
export class MenuTabComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;
  
  constructor() {}

  ngOnInit() {
    this.items = [{
        label: 'Stats',
        icon: 'fa fa-fw fa-bar-chart'
      },
      {
        label: 'Calendar',
        icon: 'fa fa-fw fa-calendar'
      },
      {
        label: 'Documentation',
        icon: 'fa fa-fw fa-book'
      },
      {
        label: 'Support',
        icon: 'fa fa-fw fa-support'
      },
      {
        label: 'Social',
        icon: 'fa fa-fw fa-twitter'
      }
    ];

    this.activeItem = this.items[2];
  }

}