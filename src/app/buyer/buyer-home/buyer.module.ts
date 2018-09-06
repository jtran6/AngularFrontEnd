import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerRoutingModule } from './buyer-routing.module';

import { BuyerHomeComponent } from './buyer-home.component';
import { AdministrationModule } from './components/administration/administration.module';
import { BudgetModule } from './components/budget/budget.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { OrderModule } from './components/order/order.module';
import { ProfileModule } from './components/profile/profile.module';
import { ReportsModule } from './components/reports/reports.module';
import { SecurityModule } from './components/security/security.module';
import { TransactionsModule } from './components/transactions/transactions.module';
import { VendorManagementModule } from './components/vendor-management/vendor-management.module';

import { SharedModule } from '../../shared/shared.module';

const IMPORTS = [
  CommonModule,
  SharedModule,
  BuyerRoutingModule,
  AdministrationModule,
  BudgetModule,
  DashboardModule,
  OrderModule,
  ProfileModule,
  ReportsModule,
  SecurityModule,
  TransactionsModule,
  VendorManagementModule
];

const COMPONENTS = [
  BuyerHomeComponent
];

const EXPORTS = [
  ...IMPORTS,
  ...COMPONENTS
];

@NgModule({
  imports: [
    ...IMPORTS
  ],
  exports: [
    ...EXPORTS
  ],
  declarations: [
    ...COMPONENTS
  ]
})
export class BuyerModule { }
