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
// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuBarComponent } from '../layout/menu-bar/menu-bar.component';

@NgModule({
  imports: [
    CommonModule,
    BuyerRoutingModule,
    AdministrationModule,
    BudgetModule,
    DashboardModule,
    OrderModule,
    ProfileModule,
    ReportsModule,
    SecurityModule,
    TransactionsModule,
    VendorManagementModule,
    // PrimeNG
    InputTextModule,
    DialogModule,
    ButtonModule,

    PasswordModule,
    MenubarModule,
    MenuModule,
    TabMenuModule
  ],
  declarations: [
    BuyerHomeComponent
  ]
})
export class BuyerModule { }
