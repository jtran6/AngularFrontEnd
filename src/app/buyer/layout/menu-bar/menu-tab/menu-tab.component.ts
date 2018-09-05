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
      case '':
      this.items = [
        {
          label: 'Announcements'
        },
        {
          label: 'Dashboard Reports'
        }
      ];
      break;
      case 'dashboard':
      this.items = [
        {
          label: 'Announcements'
        },
        {
          label: 'Dashboard Reports'
        }
      ];
      break;
      case 'order':
      this.items = [
        {
          label: 'Shopping Carts'
        },
        {
          label: 'Recurring Orders'
        },
        {
          label: 'Order Entry'
        },
        {
          label: 'Quick Search'
        },
        {
          label: 'Advanced Search'
        },
        {
          label: 'Browse'
        },
        {
          label: 'Vendor Direct'
        }
      ];
      break;
      case 'transactions': 
      this.items = [
        {
          label: 'Orders'
        },
        {
          label: 'Order Approvals'
        },
        {
          label: 'Invoices'
        },
        {
          label: 'Invoice Approvals'
        },
        {
          label: 'Hold'
        },
        {
          label: 'Offline Entries'
        },
        {
          label: 'Order Resubmit'
        },
        {
          label: 'Offline Invoice Entry'
        },
        {
          label: 'File Import'
        },
        {
          label: 'Requisitions'
        }
      ];
      break;
      case 'reports':
      this.items = [
        {
          label: 'Items'
        },
        {
          label: 'Purchasing'
        },
        {
          label: 'Budgets'
        },
        {
          label: 'Approvals'
        },
        {
          label: 'Transactions'
        },
        {
          label: 'GL Spend'
        },
        {
          label: 'Admin'
        }
      ];
      break;
      case 'vendorManagement':
      this.items = [
        {
          label: 'Vendors'
        },
        {
          label: 'Items'
        },
        {
          label: 'Item Prices'
        },
        {
          label: 'Order Guides'
        }
      ];
      break;
      case 'security': 
      this.items = [
        {
          label: 'Users'
        },
        {
          label: 'Jobs'
        },
        {
          label: 'System'
        }
      ];
      break;
      case 'administration': 
      this.items = [
        {
          label: 'Locations'
        },
        {
          label: 'Business Units'
        },
        {
          label: 'GL Segments'
        },
        {
          label: 'GL Accounts'
        },
        {
          label: 'GL Codes'
        },
        {
          label: 'GL Groups'
        },
        {
          label: 'AP Import'
        },
        {
          label: 'New Message'
        },
        {
          label: 'Order Rules'
        },
        {
          label: 'Invoice Rules'
        },
        {
          label: 'Approval Notifications'
        },
        {
          label: 'Import Wizard'
        }
      ];
      break;
      case 'budget':
      this.items = [
        {
          label: 'Budgets'
        },
        {
          label: 'Budget Groups'
        },
        {
          label: 'Budget Periods'
        },
        {
          label: 'Budget Period Values'
        },
        {
          label: 'Budget Imports'
        }
      ];
      break;
      case 'profile':
      this.items = [
        {
          label: 'Change Password'
        },
        {
          label: 'Emails'
        },
        {
          label: 'ExtUsers'
        },
        {
          label: 'Alternate Shipping'
        }
      ];
      break;
    }
  }
}
