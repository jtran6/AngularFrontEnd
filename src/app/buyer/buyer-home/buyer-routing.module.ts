import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BuyerHomeComponent } from './buyer-home.component';
// Dashboard
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardReportsComponent } from './components/dashboard/dashboard-reports/dashboard-reports.component';
// Order
import { OrderShoppingCartsComponent } from './components/order/order-shopping-carts/order-shopping-carts.component';
import { OrderRecurringOrdersComponent } from './components/order/order-recurring-orders/order-recurring-orders.component';
import { OrderOrderEntryComponent } from './components/order/order-order-entry/order-order-entry.component';
import { OrderQuickSearchComponent } from './components/order/order-quick-search/order-quick-search.component';
import { OrderAdvancedSearchComponent } from './components/order/order-advanced-search/order-advanced-search.component';
import { OrderBrowseComponent } from './components/order/order-browse/order-browse.component';
import { OrderVendorDirectComponent } from './components/order/order-vendor-direct/order-vendor-direct.component';
// Transactions
import { TransactionsOrderComponent } from './components/transactions/transactions-order/transactions-order.component';
import { TransactionsOrderApprovalsComponent } from './components/transactions/transactions-order-approvals/transactions-order-approvals.component';
import { TransactionsInvoicesComponent } from './components/transactions/transactions-invoices/transactions-invoices.component';
import { TransactionsInvoiceApprovalsComponent } from './components/transactions/transactions-invoice-approvals/transactions-invoice-approvals.component';
import { TransactionsHoldComponent } from './components/transactions/transactions-hold/transactions-hold.component';
import { TransactionsOfflineEntriesComponent } from './components/transactions/transactions-offline-entries/transactions-offline-entries.component';
import { TransactionsOrderResubmitComponent } from './components/transactions/transactions-order-resubmit/transactions-order-resubmit.component';
import { TransactionsOfflineInvoiceEntryComponent } from './components/transactions/transactions-offline-invoice-entry/transactions-offline-invoice-entry.component';
import { TransactionsFileImportComponent } from './components/transactions/transactions-file-import/transactions-file-import.component';
import { TransactionsRequisitionsComponent } from './components/transactions/transactions-requisitions/transactions-requisitions.component';
// Reports
import { ReportsItemsComponent } from './components/reports/reports-items/reports-items.component';
import { ReportsPurchasingComponent } from './components/reports/reports-purchasing/reports-purchasing.component';
import { ReportsBudgetsComponent } from './components/reports/reports-budgets/reports-budgets.component';
import { ReportsApprovalsComponent } from './components/reports/reports-approvals/reports-approvals.component';
import { ReportsTransactionsComponent } from './components/reports/reports-transactions/reports-transactions.component';
import { ReportsGlSpendComponent } from './components/reports/reports-gl-spend/reports-gl-spend.component';
import { ReportsAdminComponent } from './components/reports/reports-admin/reports-admin.component';
// VendorManagement
import { VendorManagementVendorsComponent } from './components/vendor-management/vendor-management-vendors/vendor-management-vendors.component';
import { VendorManagementItemsComponent } from './components/vendor-management/vendor-management-items/vendor-management-items.component';
import { VendorManagementItemPricesComponent } from './components/vendor-management/vendor-management-item-prices/vendor-management-item-prices.component';
import { VendorManagementOrderGuidesComponent } from './components/vendor-management/vendor-management-order-guides/vendor-management-order-guides.component';
// Security
import { SecurityUsersComponent } from './components/security/security-users/security-users.component';
import { SecurityJobsComponent } from './components/security/security-jobs/security-jobs.component';
import { SecuritySystemComponent } from './components/security/security-system/security-system.component';
// Administration
import { AdministrationLocationsComponent } from './components/administration/administration-locations/administration-locations.component';
import { AdministrationBusinessUnitsComponent } from './components/administration/administration-business-units/administration-business-units.component';
import { AdministrationGlSegmentsComponent } from './components/administration/administration-gl-segments/administration-gl-segments.component';
import { AdministrationGlAccountsComponent } from './components/administration/administration-gl-accounts/administration-gl-accounts.component';
import { AdministrationGlCodesComponent } from './components/administration/administration-gl-codes/administration-gl-codes.component';
import { AdministrationGlGroupsComponent } from './components/administration/administration-gl-groups/administration-gl-groups.component';
import { AdministrationApImportComponent } from './components/administration/administration-ap-import/administration-ap-import.component';
import { AdministrationNewsMessageComponent } from './components/administration/administration-news-message/administration-news-message.component';
import { AdministrationOrderRulesComponent } from './components/administration/administration-order-rules/administration-order-rules.component';
import { AdministrationInvoiceRulesComponent } from './components/administration/administration-invoice-rules/administration-invoice-rules.component';
import { AdministrationApprovalNotificationsComponent } from './components/administration/administration-approval-notifications/administration-approval-notifications.component';
import { AdministrationImportWizardComponent } from './components/administration/administration-import-wizard/administration-import-wizard.component';
// Budget
import { BudgetBudgetsComponent } from './components/budget/budget-budgets/budget-budgets.component';
import { BudgetGroupsComponent } from './components/budget/budget-groups/budget-groups.component';
import { BudgetPeriodsComponent } from './components/budget/budget-periods/budget-periods.component';
import { BudgetPeriodValuesComponent } from './components/budget/budget-period-values/budget-period-values.component';
import { BudgetImportsComponent } from './components/budget/budget-imports/budget-imports.component';
// Profile
import { ProfileChangePasswordComponent } from './components/profile/profile-change-password/profile-change-password.component';
import { ProfileEmailsComponent } from './components/profile/profile-emails/profile-emails.component';
import { ProfileExtendedUsersComponent } from './components/profile/profile-extended-users/profile-extended-users.component';
import { ProfileAlternativeShippingComponent } from './components/profile/profile-alternative-shipping/profile-alternative-shipping.component';

// Routing
const buyerRoutes: Routes = [
  {
    path: '', 
    component: BuyerHomeComponent,
    children: [
      //Dashboard
      {path: 'dashboard/home', component: DashboardComponent},
      {path: 'dashboard/reports', component: DashboardReportsComponent},
      //Order
      {path: 'order/shoppingcarts', component: OrderShoppingCartsComponent},
      {path: 'order/recurringorders', component: OrderRecurringOrdersComponent},
      {path: 'order/orderentry', component: OrderOrderEntryComponent},
      {path: 'order/quicksearch', component: OrderQuickSearchComponent},
      {path: 'order/advancedsearch', component: OrderAdvancedSearchComponent},
      {path: 'order/browse', component: OrderBrowseComponent},
      {path: 'order/vendordirect', component: OrderVendorDirectComponent},
      //Transactions
      {path: 'transactions/order', component: TransactionsOrderComponent},
      {path: 'transactions/orderapprovals', component: TransactionsOrderApprovalsComponent},
      {path: 'transactions/invoices', component: TransactionsInvoicesComponent},
      {path: 'transactions/invoiceapprovals', component: TransactionsInvoiceApprovalsComponent},
      {path: 'transactions/hold', component: TransactionsHoldComponent},
      {path: 'transactions/offlineentries', component: TransactionsOfflineEntriesComponent},
      {path: 'transactions/orderresubmit', component: TransactionsOrderResubmitComponent},
      {path: 'transactions/offlineinvoiceentry', component: TransactionsOfflineInvoiceEntryComponent},
      {path: 'transactions/fileimport', component: TransactionsFileImportComponent},
      {path: 'transactions/requisitions', component: TransactionsRequisitionsComponent},
      //Reports
      {path: 'reports/items', component: ReportsItemsComponent},
      {path: 'reports/purchasing', component: ReportsPurchasingComponent},
      {path: 'reports/budgets', component: ReportsBudgetsComponent},
      {path: 'reports/approvals', component: ReportsApprovalsComponent},
      {path: 'reports/transactions', component: ReportsTransactionsComponent},
      {path: 'reports/glspend', component: ReportsGlSpendComponent},
      {path: 'reports/admin', component: ReportsAdminComponent},
      //VendorManagement
      {path: 'vendormanagement/vendors', component: VendorManagementVendorsComponent},
      {path: 'vendormanagement/items', component: VendorManagementItemsComponent},
      {path: 'vendormanagement/itemprices', component: VendorManagementItemPricesComponent},
      {path: 'vendormanagement/orderguides', component: VendorManagementOrderGuidesComponent},
      //Security
      {path: 'security/users', component: SecurityUsersComponent},
      {path: 'security/jobs', component: SecurityJobsComponent},
      {path: 'security/system', component: SecuritySystemComponent},
      //Administration
      {path: 'administration/locations', component: AdministrationLocationsComponent},
      {path: 'administration/businessunits', component: AdministrationBusinessUnitsComponent},
      {path: 'administration/glsegments', component: AdministrationGlSegmentsComponent},
      {path: 'administration/glaccounts', component: AdministrationGlAccountsComponent},
      {path: 'administration/glcodes', component: AdministrationGlCodesComponent},
      {path: 'administration/glgroups', component: AdministrationGlGroupsComponent},
      {path: 'administration/apimport', component: AdministrationApImportComponent},
      {path: 'administration/newsmessage', component: AdministrationNewsMessageComponent},
      {path: 'administration/orderrules', component: AdministrationOrderRulesComponent},
      {path: 'administration/invoicerules', component: AdministrationInvoiceRulesComponent},
      {path: 'administration/approvalnotifications', component: AdministrationApprovalNotificationsComponent},
      {path: 'administration/importwizard', component: AdministrationImportWizardComponent},
      //Budget
      {path: 'budget/budgets', component: BudgetBudgetsComponent},
      {path: 'budget/budgetgroups', component: BudgetGroupsComponent},
      {path: 'budget/budgetperiods', component: BudgetPeriodsComponent},
      {path: 'budget/budgetperiodvalues', component: BudgetPeriodValuesComponent},
      {path: 'budget/budgetimports', component: BudgetImportsComponent},
      //Profile
      {path: 'profile/changepassword', component: ProfileChangePasswordComponent},
      {path: 'profile/emails', component: ProfileEmailsComponent},
      {path: 'profile/extendedusers', component: ProfileExtendedUsersComponent},
      {path: 'profile/alternateshipping', component: ProfileAlternativeShippingComponent},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(buyerRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class BuyerRoutingModule { }
