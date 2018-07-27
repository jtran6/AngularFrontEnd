import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
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
      {
        label: 'Dashboard', icon: 'fa fa-dashboard',
        items:
          [
            {
              label: 'Home', command: (event) => {
                // Make Home component appear
              }
            },
            {
              label: 'Dashboard Reports', command: (event) => {
                // Make Dashboard Reports component appear
              }
            }
          ],
        command: (event) => {
          // Make Dashboard component appear
        }
      },
      {
        label: 'Order', icon: 'fa fa-shopping-cart',
        items:
          [
            {
              label: 'Shopping Carts', command: (event) => {
                // Make Shopping Carts component appear
              }
            },
            {
              label: 'Recurring Orders', command: (event) => {
                // Make Recurring Orders component appear
              }
            },
            {
              label: 'Order Entry', command: (event) => {
                // Make Order Entry component appear
              }
            },
            {
              label: 'Quick Search', command: (event) => {
                // Make Quick Search component appear
              }
            },
            {
              label: 'Advanced Search', command: (event) => {
                // Make Advanced Search component appear
              }
            },
            {
              label: 'Browse', command: (event) => {
                // Make Browse component appear
              }
            },
            {
              label: 'Vendor Direct', command: (event) => {
                // Make Vendor Direct component appear
              }
            }
          ],
        command: (event) => {
          // Make Order component appear
        }
      },
      {
        label: 'Transactions', icon: 'fa fa-codepen',
        items:
          [
            {
              label: 'Order', command: (event) => {
                // Make Order component appear
              }
            },
            {
              label: 'Order Approvals', command: (event) => {
                // Make Order Approvals component appear
              }
            },
            {
              label: 'Invoices', command: (event) => {
                // Make Invoices component appear
              }
            },
            {
              label: 'Invoice Approvals', command: (event) => {
                // Make Invoice Approvals component appear
              }
            },
            {
              label: 'Hold', command: (event) => {
                // Make Hold component appear
              }
            },
            {
              label: 'Offline Entries', command: (event) => {
                // Make Offline Entries component appear
              }
            },
            {
              label: 'Order Resubmit', command: (event) => {
                // Make Order Resubmit component appear
              }
            },
            {
              label: 'Offline Invoice Entry', command: (event) => {
                // Make Offline Invoice Entry component appear
              }
            },
            {
              label: 'File Import', command: (event) => {
                // Make File Import component appear
              }
            },
            {
              label: 'Requisitions', command: (event) => {
                // Make Requisitions component appear
              }
            }
          ],
        command: (event) => {
          // Make Transactions component appear
        }
      },
      {
        label: 'Reports', icon: 'fa fa-clipboard',
        items:
          [
            {
              label: 'Items', command: (event) => {
                // Make Items component appear
              }
            },
            {
              label: 'Purchasing', command: (event) => {
                // Make Purchasing component appear
              }
            },
            {
              label: 'Budgets', command: (event) => {
                // Make Budgets component appear
              }
            },
            {
              label: 'Approvals', command: (event) => {
                // Make Approvals component appear
              }
            },
            {
              label: 'Transactions', command: (event) => {
                // Make Transactions component appear
              }
            },
            {
              label: 'GL Spend', command: (event) => {
                // Make GL Spend component appear
              }
            },
            {
              label: 'Admin', command: (event) => {
                // Make Admin component appear
              }
            }
          ],
        command: (event) => {
          // Make Reports component appear
        }
      },
      {
        label: 'Vendor Management', icon: 'fa fa-plus-square',
        items:
          [
            {
              label: 'Vendors', command: (event) => {
                // Make Vendors component appear
              }
            },
            {
              label: 'Items', command: (event) => {
                // Make Items component appear
              }
            },
            {
              label: 'Item Prices', command: (event) => {
                // Make Item Prices component appear
              }
            },
            {
              label: 'Order Guides', command: (event) => {
                // Make Order Guides component appear
              }
            }
          ],
        command: (event) => {
          // Make Vendor Management component appear
        }
      },
      {
        label: 'Security', icon: 'fa fa-key',
        items:
          [
            {
              label: 'Users', command: (event) => {
                // Make Users component appear
              }
            },
            {
              label: 'Jobs', command: (event) => {
                // Make Jobs component appear
              }
            },
            {
              label: 'System', command: (event) => {
                // Make System component appear
              }
            }
          ],
        command: (event) => {
          // Make Security component appear
        }
      },
      {
        label: 'Administration', icon: 'fa fa-users',
        items:
          [
            {
              label: 'Locations', command: (event) => {
                // Make Locations component appear
              }
            },
            {
              label: 'Business Units', command: (event) => {
                // Make Business Units component appear
              }
            },
            {
              label: 'GL Segments', command: (event) => {
                // Make GL Segments component appear
              }
            },
            {
              label: 'GL Accounts', command: (event) => {
                // Make GL Accounts component appear
              }
            },
            {
              label: 'GL Codes', command: (event) => {
                // Make GL Codes component appear
              }
            },
            {
              label: 'GL Groups', command: (event) => {
                // Make GL Groups component appear
              }
            },
            {
              label: 'AP Import', command: (event) => {
                // Make AP Import component appear
              }
            },
            {
              label: 'News Message', command: (event) => {
                // Make News Message component appear
              }
            },
            {
              label: 'Order Rules', command: (event) => {
                // Make Order Rules component appear
              }
            },
            {
              label: 'Invoice Rules', command: (event) => {
                // Make Invoice Rules component appear
              }
            },
            {
              label: 'Approval Notifications', command: (event) => {
                // Make Approval Notifications component appear
              }
            },
            {
              label: 'Import Wizard', command: (event) => {
                // Make Import Wizard component appear
              }
            }
          ],
        command: (event) => {
          // Make Administration component appear
        }
      },
      {
        label: 'Budget', icon: 'fa fa-dollar',
        items:
          [
            {
              label: 'Budgets', command: (event) => {
                // Make Budgets component appear
              }
            },
            {
              label: 'Budget Groups', command: (event) => {
                // Make Budget Groups component appear
              }
            },
            {
              label: 'Budget Periods', command: (event) => {
                // Make Budget Periods component appear
              }
            },
            {
              label: 'Budget Period Values', command: (event) => {
                // Make Budget Period Values component appear
              }
            },
            {
              label: 'Budget Imports', command: (event) => {
                // Make Budget Imports component appear
              }
            }
          ],
        command: (event) => {
          // Make Budget component appear
        }
      },
      {
        label: 'Profile', icon: 'fa fa-user',
        items:
          [
            {
              label: 'Change Password', command: (event) => {
                // Make Change Password component appear
              }
            },
            {
              label: 'Emails', command: (event) => {
                // Make Emails component appear
              }
            },
            {
              label: 'Extended Users', command: (event) => {
                // Make Extended Users component appear
              }
            },
            {
              label: 'Alternate Shipping', command: (event) => {
                // Make Alternate Shipping component appear
              }
            }
          ],
        command: (event) => {
          // Make Profile component appear
        }
      }
    ];
  }

  logout() {
    // Make call to api to log out
    // clear session
    // navigate to login page
    // inform user they have logged out
    this.router.navigate(['/login']);
  }

}
