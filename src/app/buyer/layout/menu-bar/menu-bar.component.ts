import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  items: MenuItem[] = [];
  tabClicked : string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard', 
        icon: 'fa fa-dashboard',
        items:
          [
            {
              label: 'Home', command: (event) => {
                // Make Home component appear
                this.setTabMenu('dashboard');
              }
            },
            {
              label: 'Dashboard Reports', command: (event) => {
                // Make Dashboard Reports component appear
                this.setTabMenu('dashboard');
              }
            }
          ],
        command: (event) => {
          // Make Dashboard component appear
          this.setTabMenu('dashboard');
        }
      },
      {
        label: 'Order', icon: 'fa fa-shopping-cart',
        items:
          [
            {
              label: 'Shopping Carts', command: (event) => {
                // Make Shopping Carts component appear
                this.setTabMenu('order');
              }
            },
            {
              label: 'Recurring Orders', command: (event) => {
                // Make Recurring Orders component appear
                this.setTabMenu('order');
              }
            },
            {
              label: 'Order Entry', command: (event) => {
                // Make Order Entry component appear
                this.setTabMenu('order');
              }
            },
            {
              label: 'Quick Search', command: (event) => {
                // Make Quick Search component appear
                this.setTabMenu('order');
              }
            },
            {
              label: 'Advanced Search', command: (event) => {
                // Make Advanced Search component appear
                this.setTabMenu('order');
              }
            },
            {
              label: 'Browse', command: (event) => {
                // Make Browse component appear
                this.setTabMenu('order');
              }
            },
            {
              label: 'Vendor Direct', command: (event) => {
                // Make Vendor Direct component appear
                this.setTabMenu('order');
              }
            }
          ],
        command: (event) => {
          // Make Order component appear
          this.setTabMenu('order');
        }
      },
      {
        label: 'Transactions', icon: 'fa fa-codepen',
        items:
          [
            {
              label: 'Order', command: (event) => {
                // Make Order component appear
                this.setTabMenu('transactions');
              }
            },
            {
              label: 'Order Approvals', command: (event) => {
                // Make Order Approvals component appear
                this.setTabMenu('transactions');
              }
            },
            {
              label: 'Invoices', command: (event) => {
                // Make Invoices component appear
                this.setTabMenu('transactions');
              }
            },
            {
              label: 'Invoice Approvals', command: (event) => {
                // Make Invoice Approvals component appear
                this.setTabMenu('transactions');
              }
            },
            {
              label: 'Hold', command: (event) => {
                // Make Hold component appear
                this.setTabMenu('transactions');
              }
            },
            {
              label: 'Offline Entries', command: (event) => {
                // Make Offline Entries component appear
                this.setTabMenu('transactions');
              }
            },
            {
              label: 'Order Resubmit', command: (event) => {
                // Make Order Resubmit component appear
                this.setTabMenu('transactions');
              }
            },
            {
              label: 'Offline Invoice Entry', command: (event) => {
                // Make Offline Invoice Entry component appear
                this.setTabMenu('transactions');
              }
            },
            {
              label: 'File Import', command: (event) => {
                // Make File Import component appear
                this.setTabMenu('transactions');
              }
            },
            {
              label: 'Requisitions', command: (event) => {
                // Make Requisitions component appear
                this.setTabMenu('transactions');
              }
            }
          ],
        command: (event) => {
          // Make Transactions component appear
          this.setTabMenu('transactions');
        }
      },
      {
        label: 'Reports', icon: 'fa fa-clipboard',
        items:
          [
            {
              label: 'Items', command: (event) => {
                // Make Items component appear
                this.setTabMenu('reports');
              }
            },
            {
              label: 'Purchasing', command: (event) => {
                // Make Purchasing component appear
                this.setTabMenu('reports');
              }
            },
            {
              label: 'Budgets', command: (event) => {
                // Make Budgets component appear
                this.setTabMenu('reports');
              }
            },
            {
              label: 'Approvals', command: (event) => {
                // Make Approvals component appear
                this.setTabMenu('reports');
              }
            },
            {
              label: 'Transactions', command: (event) => {
                // Make Transactions component appear
                this.setTabMenu('reports');
              }
            },
            {
              label: 'GL Spend', command: (event) => {
                // Make GL Spend component appear
                this.setTabMenu('reports');
              }
            },
            {
              label: 'Admin', command: (event) => {
                // Make Admin component appear
                this.setTabMenu('reports');
              }
            }
          ],
        command: (event) => {
          // Make Reports component appear
          this.setTabMenu('reports');
        }
      },
      {
        label: 'Vendor Management', icon: 'fa fa-plus-square',
        items:
          [
            {
              label: 'Vendors', command: (event) => {
                // Make Vendors component appear
                this.setTabMenu('vendorManagement');
              }
            },
            {
              label: 'Items', command: (event) => {
                // Make Items component appear
                this.setTabMenu('vendorManagement');
              }
            },
            {
              label: 'Item Prices', command: (event) => {
                // Make Item Prices component appear
                this.setTabMenu('vendorManagement');
              }
            },
            {
              label: 'Order Guides', command: (event) => {
                // Make Order Guides component appear
                this.setTabMenu('vendorManagement');
              }
            }
          ],
        command: (event) => {
          // Make Vendor Management component appear
          this.setTabMenu('vendorManagement');
        }
      },
      {
        label: 'Security', icon: 'fa fa-key',
        items:
          [
            {
              label: 'Users', command: (event) => {
                // Make Users component appear
                this.setTabMenu('security');
              }
            },
            {
              label: 'Jobs', command: (event) => {
                // Make Jobs component appear
                this.setTabMenu('security');
              }
            },
            {
              label: 'System', command: (event) => {
                // Make System component appear
                this.setTabMenu('security');
              }
            }
          ],
        command: (event) => {
          // Make Security component appear
          this.setTabMenu('security');
        }
      },
      {
        label: 'Administration', icon: 'fa fa-users',
        items:
          [
            {
              label: 'Locations', command: (event) => {
                // Make Locations component appear
                this.setTabMenu('administration');
              }
            },
            {
              label: 'Business Units', command: (event) => {
                // Make Business Units component appear
                this.setTabMenu('administration');
              }
            },
            {
              label: 'GL Segments', command: (event) => {
                // Make GL Segments component appear
                this.setTabMenu('administration');
              }
            },
            {
              label: 'GL Accounts', command: (event) => {
                // Make GL Accounts component appear
                this.setTabMenu('administration');
              }
            },
            {
              label: 'GL Codes', command: (event) => {
                // Make GL Codes component appear
                this.setTabMenu('administration');
              }
            },
            {
              label: 'GL Groups', command: (event) => {
                // Make GL Groups component appear
                this.setTabMenu('administration');
              }
            },
            {
              label: 'AP Import', command: (event) => {
                // Make AP Import component appear
                this.setTabMenu('administration');
              }
            },
            {
              label: 'News Message', command: (event) => {
                // Make News Message component appear
                this.setTabMenu('administration');
              }
            },
            {
              label: 'Order Rules', command: (event) => {
                // Make Order Rules component appear
                this.setTabMenu('administration');
              }
            },
            {
              label: 'Invoice Rules', command: (event) => {
                // Make Invoice Rules component appear
                this.setTabMenu('administration');
              }
            },
            {
              label: 'Approval Notifications', command: (event) => {
                // Make Approval Notifications component appear
                this.setTabMenu('administration');
              }
            },
            {
              label: 'Import Wizard', command: (event) => {
                // Make Import Wizard component appear
                this.setTabMenu('administration');
              }
            }
          ],
        command: (event) => {
          // Make Administration component appear
          this.setTabMenu('administration');
        }
      },
      {
        label: 'Budget', icon: 'fa fa-dollar',
        items:
          [
            {
              label: 'Budgets', command: (event) => {
                // Make Budgets component appear
                this.setTabMenu('budget');
              }
            },
            {
              label: 'Budget Groups', command: (event) => {
                // Make Budget Groups component appear
                this.setTabMenu('budget');
              }
            },
            {
              label: 'Budget Periods', command: (event) => {
                // Make Budget Periods component appear
                this.setTabMenu('budget');
              }
            },
            {
              label: 'Budget Period Values', command: (event) => {
                // Make Budget Period Values component appear
                this.setTabMenu('budget');
              }
            },
            {
              label: 'Budget Imports', command: (event) => {
                // Make Budget Imports component appear
                this.setTabMenu('budget');
              }
            }
          ],
        command: (event) => {
          // Make Budget component appear
          this.setTabMenu('budget');
        }
      },
      {
        label: 'Profile', icon: 'fa fa-user',
        items:
          [
            {
              label: 'Change Password', command: (event) => {
                // Make Change Password component appear
                this.setTabMenu('profile');
              }
            },
            {
              label: 'Emails', command: (event) => {
                // Make Emails component appear
                this.setTabMenu('profile');
              }
            },
            {
              label: 'Extended Users', command: (event) => {
                // Make Extended Users component appear
                this.setTabMenu('profile');
              }
            },
            {
              label: 'Alternate Shipping', command: (event) => {
                // Make Alternate Shipping component appear
                this.setTabMenu('profile');
              }
            }
          ],
        command: (event) => {
          // Make Profile component appear
          this.setTabMenu('profile');
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

  setTabMenu(menuName: string){
    this.tabClicked = menuName;
    console.log(menuName);
  }

}
