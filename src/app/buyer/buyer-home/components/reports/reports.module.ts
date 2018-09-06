import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsItemsComponent } from './reports-items/reports-items.component';
import { ReportsPurchasingComponent } from './reports-purchasing/reports-purchasing.component';
import { ReportsBudgetsComponent } from './reports-budgets/reports-budgets.component';
import { ReportsApprovalsComponent } from './reports-approvals/reports-approvals.component';
import { ReportsTransactionsComponent } from './reports-transactions/reports-transactions.component';
import { ReportsGlSpendComponent } from './reports-gl-spend/reports-gl-spend.component';
import { ReportsAdminComponent } from './reports-admin/reports-admin.component';
import { ReportsComponent } from './reports.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ReportsComponent,
    ReportsAdminComponent,
    ReportsGlSpendComponent,
    ReportsTransactionsComponent,
    ReportsApprovalsComponent,
    ReportsBudgetsComponent,
    ReportsPurchasingComponent,
    ReportsItemsComponent
  ]
})
export class ReportsModule { }
