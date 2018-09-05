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
              label: 'Home', 
              command: (event) => {
                // Make Home component appear
                this.setTabMenu('dashboard');
              },
              routerLink: 'dashboard/home'
            },
            {
              label: 'Dashboard Reports', 
              command: (event) => {
                // Make Dashboard Reports component appear
                this.setTabMenu('dashboard');
              },
              routerLink: 'dashboard/reports'
            }
          ],
        command: (event) => {
          // Make Dashboard component appear
          this.setTabMenu('dashboard');
        },
        routerLink: 'dashboard/home'
      },
      {
        label: 'Order', icon: 'fa fa-shopping-cart',
        items:
          [
            {
              label: 'Shopping Carts', 
              command: (event) => {
                // Make Shopping Carts component appear
                this.setTabMenu('order');
              },
              routerLink: 'order/shoppingcarts'
            },
            {
              label: 'Recurring Orders', 
              command: (event) => {
                // Make Recurring Orders component appear
                this.setTabMenu('order');
              },
              routerLink: 'order/recurringorders'
            },
            {
              label: 'Order Entry', 
              command: (event) => {
                // Make Order Entry component appear
                this.setTabMenu('order');
              },
              routerLink: 'order/orderentry'
            },
            {
              label: 'Quick Search', 
              command: (event) => {
                // Make Quick Search component appear
                this.setTabMenu('order');
              },
              routerLink: 'order/quicksearch'
            },
            {
              label: 'Advanced Search', 
              command: (event) => {
                // Make Advanced Search component appear
                this.setTabMenu('order');
              },
              routerLink: 'order/advancedsearch'
            },
            {
              label: 'Browse', 
              command: (event) => {
                // Make Browse component appear
                this.setTabMenu('order');
              },
              routerLink: 'order/browse'
            },
            {
              label: 'Vendor Direct', 
              command: (event) => {
                // Make Vendor Direct component appear
                this.setTabMenu('order');
              },
              routerLink: 'order/vendordirect'
            }
          ],
        command: (event) => {
          // Make Order component appear
          this.setTabMenu('order');
        },
        routerLink: 'order/shoppingcarts'
      },
      {
        label: 'Transactions', icon: 'fa fa-codepen',
        items:
          [
            {
              label: 'Order', 
              command: (event) => {
                // Make Order component appear
                this.setTabMenu('transactions');
              },
              routerLink: 'transactions/order'
            },
            {
              label: 'Order Approvals', 
              command: (event) => {
                // Make Order Approvals component appear
                this.setTabMenu('transactions');
              },
              routerLink: 'transactions/orderapproval'
            },
            {
              label: 'Invoices', 
              command: (event) => {
                // Make Invoices component appear
                this.setTabMenu('transactions');
              },
              routerLink: 'transactions/invoices'
            },
            {
              label: 'Invoice Approvals', 
              command: (event) => {
                // Make Invoice Approvals component appear
                this.setTabMenu('transactions');
              },
              routerLink: 'transactions/invoiceapprovals'
            },
            {
              label: 'Hold', 
              command: (event) => {
                // Make Hold component appear
                this.setTabMenu('transactions');
              },
              routerLink: 'transactions/hold'
            },
            {
              label: 'Offline Entries', 
              command: (event) => {
                // Make Offline Entries component appear
                this.setTabMenu('transactions');
              },
              routerLink: 'transactions/offlineentries'
            },
            {
              label: 'Order Resubmit', 
              command: (event) => {
                // Make Order Resubmit component appear
                this.setTabMenu('transactions');
              },
              routerLink: 'transactions/orderresubmit'
            },
            {
              label: 'Offline Invoice Entry', 
              command: (event) => {
                // Make Offline Invoice Entry component appear
                this.setTabMenu('transactions');
              },
              routerLink: 'transactions/offlineinvoiceentry'
            },
            {
              label: 'File Import',
              command: (event) => {
                // Make File Import component appear
                this.setTabMenu('transactions');
              },
              routerLink: 'transactions/fileimport'
            },
            {
              label: 'Requisitions', 
              command: (event) => {
                // Make Requisitions component appear
                this.setTabMenu('transactions');
              },
              routerLink: 'transactions/requisitions'
            }
          ],
        command: (event) => {
          // Make Transactions component appear
          this.setTabMenu('transactions');
        },
        routerLink: 'transactions/order'
      },
      {
        label: 'Reports', icon: 'fa fa-clipboard',
        items:
          [
            {
              label: 'Items', 
              command: (event) => {
                // Make Items component appear
                this.setTabMenu('reports');
              },
              routerLink: 'reports/items'
            },
            {
              label: 'Purchasing', 
              command: (event) => {
                // Make Purchasing component appear
                this.setTabMenu('reports');
              },
              routerLink: 'reports/purchasing'
            },
            {
              label: 'Budgets', 
              command: (event) => {
                // Make Budgets component appear
                this.setTabMenu('reports');
              },
              routerLink: 'reports/budgets'
            },
            {
              label: 'Approvals', 
              command: (event) => {
                // Make Approvals component appear
                this.setTabMenu('reports');
              },
              routerLink: 'reports/approvals'
            },
            {
              label: 'Transactions', 
              command: (event) => {
                // Make Transactions component appear
                this.setTabMenu('reports');
              },
              routerLink: 'reports/transactions'
            },
            {
              label: 'GL Spend', 
              command: (event) => {
                // Make GL Spend component appear
                this.setTabMenu('reports');
              },
              routerLink: 'reports/glspend'
            },
            {
              label: 'Admin', 
              command: (event) => {
                // Make Admin component appear
                this.setTabMenu('reports');
              },
              routerLink: 'reports/admin'
            }
          ],
        command: (event) => {
          // Make Reports component appear
          this.setTabMenu('reports');
        },
        routerLink: 'reports/items'
      },
      {
        label: 'Vendor Management', icon: 'fa fa-plus-square',
        items:
          [
            {
              label: 'Vendors', 
              command: (event) => {
                // Make Vendors component appear
                this.setTabMenu('vendorManagement');
              },
              routerLink: 'vendormanagement/vendors'
            },
            {
              label: 'Items', 
              command: (event) => {
                // Make Items component appear
                this.setTabMenu('vendorManagement');
              },
              routerLink: 'vendormanagement/items'
            },
            {
              label: 'Item Prices', 
              command: (event) => {
                // Make Item Prices component appear
                this.setTabMenu('vendorManagement');
              },
              routerLink: 'vendormanagement/itemprices'
            },
            {
              label: 'Order Guides', 
              command: (event) => {
                // Make Order Guides component appear
                this.setTabMenu('vendorManagement');
              },
              routerLink: 'vendormanagement/orderguides'
            }
          ],
        command: (event) => {
          // Make Vendor Management component appear
          this.setTabMenu('vendorManagement');
        },
        routerLink: 'vendormanagement/vendors'
      },
      {
        label: 'Security', icon: 'fa fa-key',
        items:
          [
            {
              label: 'Users', 
              command: (event) => {
                // Make Users component appear
                this.setTabMenu('security');
              },
              routerLink: 'security/users'
            },
            {
              label: 'Jobs', 
              command: (event) => {
                // Make Jobs component appear
                this.setTabMenu('security');
              },
              routerLink: 'security/jobs'
            },
            {
              label: 'System', 
              command: (event) => {
                // Make System component appear
                this.setTabMenu('security');
              },
              routerLink: 'security/system'
            }
          ],
        command: (event) => {
          // Make Security component appear
          this.setTabMenu('security');
        },
        routerLink: 'security/users'
      },
      {
        label: 'Administration', icon: 'fa fa-users',
        items:
          [
            {
              label: 'Locations', 
              command: (event) => {
                // Make Locations component appear
                this.setTabMenu('administration');
              },
              routerLink: 'administration/locations'
            },
            {
              label: 'Business Units', 
              command: (event) => {
                // Make Business Units component appear
                this.setTabMenu('administration');
              },
              routerLink: 'administration/businessunits'
            },
            {
              label: 'GL Segments', 
              command: (event) => {
                // Make GL Segments component appear
                this.setTabMenu('administration');
              },
              routerLink: 'administration/glsegments'
            },
            {
              label: 'GL Accounts', 
              command: (event) => {
                // Make GL Accounts component appear
                this.setTabMenu('administration');
              },
              routerLink: 'administration/glaccounts'
            },
            {
              label: 'GL Codes', 
              command: (event) => {
                // Make GL Codes component appear
                this.setTabMenu('administration');
              },
              routerLink: 'administration/glcodes'
            },
            {
              label: 'GL Groups', 
              command: (event) => {
                // Make GL Groups component appear
                this.setTabMenu('administration');
              },
              routerLink: 'administration/glgroups'
            },
            {
              label: 'AP Import', 
              command: (event) => {
                // Make AP Import component appear
                this.setTabMenu('administration');
              },
              routerLink: 'administration/apimport'
            },
            {
              label: 'News Message', 
              command: (event) => {
                // Make News Message component appear
                this.setTabMenu('administration');
              },
              routerLink: 'administration/newsmessage'
            },
            {
              label: 'Order Rules', 
              command: (event) => {
                // Make Order Rules component appear
                this.setTabMenu('administration');
              },
              routerLink: 'administration/orderrules'
            },
            {
              label: 'Invoice Rules', 
              command: (event) => {
                // Make Invoice Rules component appear
                this.setTabMenu('administration');
              },
              routerLink: 'administration/invoicerules'
            },
            {
              label: 'Approval Notifications', 
              command: (event) => {
                // Make Approval Notifications component appear
                this.setTabMenu('administration');
              },
              routerLink: 'administration/approvalnotifications'
            },
            {
              label: 'Import Wizard', 
              command: (event) => {
                // Make Import Wizard component appear
                this.setTabMenu('administration');
              },
              routerLink: 'administration/importwizard'
            }
          ],
        command: (event) => {
          // Make Administration component appear
          this.setTabMenu('administration');
        },
        routerLink: 'administration/locations'
      },
      {
        label: 'Budget', icon: 'fa fa-dollar',
        items:
          [
            {
              label: 'Budgets', 
              command: (event) => {
                // Make Budgets component appear
                this.setTabMenu('budget');
              },
              routerLink: 'budget/budgets'
            },
            {
              label: 'Budget Groups', 
              command: (event) => {
                // Make Budget Groups component appear
                this.setTabMenu('budget');
              },
              routerLink: 'budget/budgetgroups'
            },
            {
              label: 'Budget Periods', 
              command: (event) => {
                // Make Budget Periods component appear
                this.setTabMenu('budget');
              },
              routerLink: 'budget/budgetperiods'
            },
            {
              label: 'Budget Period Values', 
              command: (event) => {
                // Make Budget Period Values component appear
                this.setTabMenu('budget');
              },
              routerLink: 'budget/budgetperiodvalues'
            },
            {
              label: 'Budget Imports', 
              command: (event) => {
                // Make Budget Imports component appear
                this.setTabMenu('budget');
              },
              routerLink: 'budget/budgetimports'
            }
          ],
        command: (event) => {
          // Make Budget component appear
          this.setTabMenu('budget');
        },
        routerLink: 'budget/budgets'
      },
      {
        label: 'Profile', icon: 'fa fa-user',
        items:
          [
            {
              label: 'Change Password', 
              command: (event) => {
                // Make Change Password component appear
                this.setTabMenu('profile');
              },
              routerLink: 'profile/changepassword'
            },
            {
              label: 'Emails', 
              command: (event) => {
                // Make Emails component appear
                this.setTabMenu('profile');
              },
              routerLink: 'profile/emails'
            },
            {
              label: 'Extended Users', 
              command: (event) => {
                // Make Extended Users component appear
                this.setTabMenu('profile');
              },
              routerLink: 'profile/extendedusers'
            },
            {
              label: 'Alternate Shipping', 
              command: (event) => {
                // Make Alternate Shipping component appear
                this.setTabMenu('profile');
              },
              routerLink: 'profile/alternateshipping'
            }
          ],
        command: (event) => {
          // Make Profile component appear
          this.setTabMenu('profile');
        },
        routerLink: 'profile/changepassword'
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

  //used to set value of tab menu under main nav
  setTabMenu(menuName: string){
    this.tabClicked = menuName;
    console.log(menuName);
  }

}
