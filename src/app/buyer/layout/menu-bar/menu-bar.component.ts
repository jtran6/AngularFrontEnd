import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  items: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {label: 'Dashboard', icon: 'fa fa-dashboard',
      items:
        [
          {label: 'Home'},
          {label: 'Dashboard Reports'}
        ]
      },
      {label: 'Order', icon: 'fa fa-shopping-cart',
      items: 
        [
          {label: 'Shopping Carts'},
          {label: 'Recurring Orders'},
          {label: 'Order Entry'},
          {label: 'Quick Search'},
          {label: 'Advanced Search'},
          {label: 'Browse'},
          {label: 'Vendor Direct'}
        ]
      },
      {label: 'Transactions',  icon: 'fa fa-codepen',
      items: 
        [
          {label: 'Order'},
          {label: 'Order Approvals'},
          {label: 'Invoices'},
          {label: 'Invoice Approvals'},
          {label: 'Hold'},
          {label: 'Offline Entries'},
          {label: 'Order Resubmit'},
          {label: 'Offline Invoice Entry'},
          {label: 'File Import'},
          {label: 'Requisitions'}
        ]
      },
      {label: 'Reports', icon: 'fa fa-clipboard',
      items: 
        [
          {label: 'Items'},
          {label: 'Purchasing'},
          {label: 'Budgets'},
          {label: 'Approvals'},
          {label: 'Transactions'},
          {label: 'GL Spend'},
          {label: 'Admin'}
        ]
      },
      {label: 'Vendor Management', icon: 'fa fa-plus-square',
      items: 
        [
          {label: 'Vendors'},
          {label: 'Items'},
          {label: 'Item Prices'},
          {label: 'Order Guides'}
        ]
      },
      {label: 'Security',  icon: 'fa fa-key',
      items: 
        [
          {label: 'Users'},
          {label: 'Jobs'},
          {label: 'System'}
        ]
      },
      {label: 'Administration', icon: 'fa fa-users',
      items: 
        [
          {label: 'Locations'},
          {label: 'Business Units'},
          {label: 'GL Segments'},
          {label: 'GL Accounts'},
          {label: 'GL Codes'},
          {label: 'GL Groups'},
          {label: 'AP Import'},
          {label: 'News Message'},
          {label: 'Order Rules'},
          {label: 'Invoice Rules'},
          {label: 'Approval Notifications'},
          {label: 'Import Wizard'}
        ]
      },
      {label: 'Budget', icon: 'fa fa-dollar',
      items: 
        [
          {label: 'Budgets'},
          {label: 'Budget Groups'},
          {label: 'Budget Periods'},
          {label: 'Budget Period Values'},
          {label: 'Budget Imports'}
        ]
      },
      {label: 'Profile', icon: 'fa fa-user',
      items: 
        [
          {label: 'Change Password'},
          {label: 'Emails'},
          {label: 'Extended Users'},
          {label: 'Alternate Shipping'}
        ]
      }
  ];
  }

  logout() {
    this.router.navigate(['/login']);
  }

}
