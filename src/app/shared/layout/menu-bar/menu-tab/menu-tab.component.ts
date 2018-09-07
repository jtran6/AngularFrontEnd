import {
  Component,
  OnInit,
  Input
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
  @Input() tabClicked: string = '';
  
  constructor() {}

  ngOnChanges(){
    this.setTabMenu(this.tabClicked);
  }

  ngOnInit(){
    this.setTabMenu(this.tabClicked);
    //this.activeItem = this.items[0];
  }

  setTabMenu(tabClicked: string){
    switch(tabClicked)
    {
      // default to dashboard/home on load
      case '':
      this.items = [
        {
          label: 'Announcements',
          routerLink: 'dashboard/home'
        },
        {
          label: 'Dashboard Reports',
          routerLink: 'dashboard/reports'
        }
      ];
      break;
      case 'dashboard':
      this.items = [
        {
          label: 'Announcements',
          routerLink: 'dashboard/home'
        },
        {
          label: 'Dashboard Reports',
          routerLink: 'dashboard/reports'
        }
      ];
      break;
      case 'order':
      this.items = [
        {
          label: 'Shopping Carts',
          routerLink: 'order/shoppingcarts'
        },
        {
          label: 'Recurring Orders',
          routerLink: 'order/recurringorders'
        },
        {
          label: 'Order Entry',
          routerLink: 'order/orderentry'
        },
        {
          label: 'Quick Search',
          routerLink: 'order/quicksearch'
        },
        {
          label: 'Advanced Search',
          routerLink: 'order/advancedsearch'
        },
        {
          label: 'Browse',
          routerLink: 'order/browse'
        },
        {
          label: 'Vendor Direct',
          routerLink: 'order/vendordirect'
        }
      ];
      break;
      case 'transactions': 
      this.items = [
        {
          label: 'Orders',
          routerLink: 'transactions/orders'
        },
        {
          label: 'Order Approvals',
          routerLink: 'transactions/orderapprovals'
        },
        {
          label: 'Invoices',
          routerLink: 'transactions/invoices'
        },
        {
          label: 'Invoice Approvals',
          routerLink: 'transactions/invoiceapprovals'
        },
        {
          label: 'Hold',
          routerLink: 'transactions/hold'
        },
        {
          label: 'Offline Entries',
          routerLink: 'transactions/offlineentries'
        },
        {
          label: 'Order Resubmit',
          routerLink: 'transactions/orderresubmit'
        },
        {
          label: 'Offline Invoice Entry',
          routerLink: 'transactions/offlineinvoiceentry'
        },
        {
          label: 'File Import',
          routerLink: 'transactions/fileimport'
        },
        {
          label: 'Requisitions',
          routerLink: 'transactions/requisitions'
        }
      ];
      break;
      case 'reports':
      this.items = [
        {
          label: 'Items',
          routerLink: 'reports/items'
        },
        {
          label: 'Purchasing',
          routerLink: 'reports/purchasing'
        },
        {
          label: 'Budgets',
          routerLink: 'reports/budgets'
        },
        {
          label: 'Approvals',
          routerLink: 'reports/approvals'
        },
        {
          label: 'Transactions',
          routerLink: 'reports/transactions'
        },
        {
          label: 'GL Spend',
          routerLink: 'reports/glspend'
        },
        {
          label: 'Admin',
          routerLink: 'reports/admin'
        }
      ];
      break;
      case 'vendorManagement':
      this.items = [
        {
          label: 'Vendors',
          routerLink: 'vendormanagement/vendors'
        },
        {
          label: 'Items',
          routerLink: 'vendormanagement/items'
        },
        {
          label: 'Item Prices',
          routerLink: 'vendormanagement/itemprices'
        },
        {
          label: 'Order Guides',
          routerLink: 'vendormanagement/orderguides'
        }
      ];
      break;
      case 'security': 
      this.items = [
        {
          label: 'Users',
          routerLink: 'security/users'
        },
        {
          label: 'Jobs',
          routerLink: 'security/jobs'
        },
        {
          label: 'System',
          routerLink: 'security/system'
        }
      ];
      break;
      case 'administration': 
      this.items = [
        {
          label: 'Locations',
          routerLink: 'administration/locations'
        },
        {
          label: 'Business Units',
          routerLink: 'administration/businessunits'
        },
        {
          label: 'GL Segments',
          routerLink: 'administration/glsegments'
        },
        {
          label: 'GL Accounts',
          routerLink: 'administration/glaccounts'
        },
        {
          label: 'GL Codes',
          routerLink: 'administration/glcodes'
        },
        {
          label: 'GL Groups',
          routerLink: 'administration/glgroups'
        },
        {
          label: 'AP Import',
          routerLink: 'administration/apimport'
        },
        {
          label: 'News Message',
          routerLink: 'administration/newsmessage'
        },
        {
          label: 'Order Rules',
          routerLink: 'administration/orderrules'
        },
        {
          label: 'Invoice Rules',
          routerLink: 'administration/invoicerules'
        },
        {
          label: 'Approval Notifications',
          routerLink: 'administration/approvalnotifications'
        },
        {
          label: 'Import Wizard',
          routerLink: 'administration/importwizard'
        }
      ];
      break;
      case 'budget':
      this.items = [
        {
          label: 'Budgets',
          routerLink: 'budget/budgets'
        },
        {
          label: 'Budget Groups',
          routerLink: 'budget/budgetgroups'
        },
        {
          label: 'Budget Periods',
          routerLink: 'budget/budgetperiods'
        },
        {
          label: 'Budget Period Values',
          routerLink: 'budget/budgetperiodvalues'
        },
        {
          label: 'Budget Imports',
          routerLink: 'budget/budgetimports'
        }
      ];
      break;
      case 'profile':
      this.items = [
        {
          label: 'Change Password',
          routerLink: 'profile/changepassword'
        },
        {
          label: 'Emails',
          routerLink: 'profile/emails'
        },
        {
          label: 'Extended Users',
          routerLink: 'profile/extendedusers'
        },
        {
          label: 'Alternate Shipping',
          routerLink: 'profile/alternateshipping'
        }
      ];
      break;
    }
  }
}
