import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
// Primeng
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
// Buyer Pages
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { BuyerHomeComponent } from './buyer/buyer-home/buyer-home.component';
import { ForgotPasswordComponent } from './shared/forgot-password/forgot-password.component';
import { ForgotPasswordSuccessComponent } from './shared/forgot-password-success/forgot-password-success.component';
import { MenuBarComponent } from './buyer/layout/menu-bar/menu-bar.component';
import { FooterComponent } from './buyer/layout/footer/footer.component';
import { DashboardComponent } from './buyer/buyer-home/components/dashboard/dashboard.component';
import { DashboardHomeComponent } from './buyer/buyer-home/components/dashboard/dashboard-home/dashboard-home.component';
import { DashboardReportsComponent } from './buyer/buyer-home/components/dashboard/dashboard-reports/dashboard-reports.component';
import { OrderComponent } from './buyer/buyer-home/components/order/order.component';
import { TransactionsComponent } from './buyer/buyer-home/components/transactions/transactions.component';
import { ReportsComponent } from './buyer/buyer-home/components/reports/reports.component';
import { VendorManagementComponent } from './buyer/buyer-home/components/vendor-management/vendor-management.component';
import { SecurityComponent } from './buyer/buyer-home/components/security/security.component';
import { AdministrationComponent } from './buyer/buyer-home/components/administration/administration.component';
import { BudgetComponent } from './buyer/buyer-home/components/budget/budget.component';
import { ProfileComponent } from './buyer/buyer-home/components/profile/profile.component';
import { TransactionsOrderComponent } from './buyer/buyer-home/components/transactions/transactions-order/transactions-order.component';
import { TransactionsOrderApprovalsComponent } from './buyer/buyer-home/components/transactions/transactions-order-approvals/transactions-order-approvals.component';
import { TransactionsInvoicesComponent } from './buyer/buyer-home/components/transactions/transactions-invoices/transactions-invoices.component';
import { TransactionsInvoiceApprovalsComponent } from './buyer/buyer-home/components/transactions/transactions-invoice-approvals/transactions-invoice-approvals.component';
import { TransactionsHoldComponent } from './buyer/buyer-home/components/transactions/transactions-hold/transactions-hold.component';
import { TransactionsOfflineEntriesComponent } from './buyer/buyer-home/components/transactions/transactions-offline-entries/transactions-offline-entries.component';
import { TransactionsOrderResubmitComponent } from './buyer/buyer-home/components/transactions/transactions-order-resubmit/transactions-order-resubmit.component';
import { TransactionsOfflineInvoiceEntryComponent } from './buyer/buyer-home/components/transactions/transactions-offline-invoice-entry/transactions-offline-invoice-entry.component';
import { TransactionsFileImportComponent } from './buyer/buyer-home/components/transactions/transactions-file-import/transactions-file-import.component';
import { TransactionsRequisitionsComponent } from './buyer/buyer-home/components/transactions/transactions-requisitions/transactions-requisitions.component';
import { ReportsItemsComponent } from './buyer/buyer-home/components/reports/reports-items/reports-items.component';
import { ReportsPurchasingComponent } from './buyer/buyer-home/components/reports/reports-purchasing/reports-purchasing.component';
import { ReportsBudgetsComponent } from './buyer/buyer-home/components/reports/reports-budgets/reports-budgets.component';
import { ReportsApprovalsComponent } from './buyer/buyer-home/components/reports/reports-approvals/reports-approvals.component';
import { ReportsTransactionsComponent } from './buyer/buyer-home/components/reports/reports-transactions/reports-transactions.component';
import { ReportsGlSpendComponent } from './buyer/buyer-home/components/reports/reports-gl-spend/reports-gl-spend.component';
import { ReportsAdminComponent } from './buyer/buyer-home/components/reports/reports-admin/reports-admin.component';
import { VendorManagementVendorsComponent } from './buyer/buyer-home/components/vendor-management/vendor-management-vendors/vendor-management-vendors.component';
import { VendorManagementItemsComponent } from './buyer/buyer-home/components/vendor-management/vendor-management-items/vendor-management-items.component';
import { VendorManagementItemPricesComponent } from './buyer/buyer-home/components/vendor-management/vendor-management-item-prices/vendor-management-item-prices.component';
import { VendorManagementOrderGuidesComponent } from './buyer/buyer-home/components/vendor-management/vendor-management-order-guides/vendor-management-order-guides.component';
import { SecurityUsersComponent } from './buyer/buyer-home/components/security/security-users/security-users.component';
import { SecurityJobsComponent } from './buyer/buyer-home/components/security/security-jobs/security-jobs.component';
import { SecuritySystemComponent } from './buyer/buyer-home/components/security/security-system/security-system.component';
import { AdministrationLocationsComponent } from './buyer/buyer-home/components/administration/administration-locations/administration-locations.component';
import { AdministrationBusinessUnitsComponent } from './buyer/buyer-home/components/administration/administration-business-units/administration-business-units.component';
import { AdministrationGlSegmentsComponent } from './buyer/buyer-home/components/administration/administration-gl-segments/administration-gl-segments.component';
import { AdministrationGlAccountsComponent } from './buyer/buyer-home/components/administration/administration-gl-accounts/administration-gl-accounts.component';
import { AdministrationGlCodesComponent } from './buyer/buyer-home/components/administration/administration-gl-codes/administration-gl-codes.component';
import { AdministrationGlGroupsComponent } from './buyer/buyer-home/components/administration/administration-gl-groups/administration-gl-groups.component';
import { AdministrationApImportComponent } from './buyer/buyer-home/components/administration/administration-ap-import/administration-ap-import.component';
import { AdministrationNewsMessageComponent } from './buyer/buyer-home/components/administration/administration-news-message/administration-news-message.component';
import { AdministrationOrderRulesComponent } from './buyer/buyer-home/components/administration/administration-order-rules/administration-order-rules.component';
import { AdministrationInvoiceRulesComponent } from './buyer/buyer-home/components/administration/administration-invoice-rules/administration-invoice-rules.component';
import { AdministrationApprovalNotificationsComponent } from './buyer/buyer-home/components/administration/administration-approval-notifications/administration-approval-notifications.component';
import { AdministrationImportWizardComponent } from './buyer/buyer-home/components/administration/administration-import-wizard/administration-import-wizard.component';
import { BudgetBudgetsComponent } from './buyer/buyer-home/components/budget/budget-budgets/budget-budgets.component';
import { BudgetGroupsComponent } from './buyer/buyer-home/components/budget/budget-groups/budget-groups.component';
import { BudgetPeriodsComponent } from './buyer/buyer-home/components/budget/budget-periods/budget-periods.component';
import { BudgetPeriodValuesComponent } from './buyer/buyer-home/components/budget/budget-period-values/budget-period-values.component';
import { BudgetImportsComponent } from './buyer/buyer-home/components/budget/budget-imports/budget-imports.component';
import { ProfileChangePasswordComponent } from './buyer/buyer-home/components/profile/profile-change-password/profile-change-password.component';
import { ProfileEmailsComponent } from './buyer/buyer-home/components/profile/profile-emails/profile-emails.component';
import { ProfileExtendedUsersComponent } from './buyer/buyer-home/components/profile/profile-extended-users/profile-extended-users.component';
import { ProfileAlternativeShippingComponent } from './buyer/buyer-home/components/profile/profile-alternative-shipping/profile-alternative-shipping.component';
import { OrderShoppingCartsComponent } from './buyer/buyer-home/components/order/order-shopping-carts/order-shopping-carts.component';
import { OrderRecurringOrdersComponent } from './buyer/buyer-home/components/order/order-recurring-orders/order-recurring-orders.component';
import { OrderOrderEntryComponent } from './buyer/buyer-home/components/order/order-order-entry/order-order-entry.component';
import { OrderQuickSearchComponent } from './buyer/buyer-home/components/order/order-quick-search/order-quick-search.component';
import { OrderAdvancedSearchComponent } from './buyer/buyer-home/components/order/order-advanced-search/order-advanced-search.component';
import { OrderBrowseComponent } from './buyer/buyer-home/components/order/order-browse/order-browse.component';
import { OrderVendorDirectComponent } from './buyer/buyer-home/components/order/order-vendor-direct/order-vendor-direct.component';
import { MenuTabComponent } from './buyer/layout/menu-bar/menu-tab/menu-tab.component';

// Routing
const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'forgot-password-success', component: ForgotPasswordSuccessComponent },
    { path: 'buyer-home', component: BuyerHomeComponent }
];
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        BuyerHomeComponent,
        ForgotPasswordComponent,
        ForgotPasswordSuccessComponent,
        MenuBarComponent,
        FooterComponent,
        DashboardComponent,
        DashboardHomeComponent,
        DashboardReportsComponent,
        OrderComponent,
        TransactionsComponent,
        ReportsComponent,
        VendorManagementComponent,
        SecurityComponent,
        AdministrationComponent,
        BudgetComponent,
        ProfileComponent,
        TransactionsOrderComponent,
        TransactionsOrderApprovalsComponent,
        TransactionsInvoicesComponent,
        TransactionsInvoiceApprovalsComponent,
        TransactionsHoldComponent,
        TransactionsOfflineEntriesComponent,
        TransactionsOrderResubmitComponent,
        TransactionsOfflineInvoiceEntryComponent,
        TransactionsFileImportComponent,
        TransactionsRequisitionsComponent,
        ReportsItemsComponent,
        ReportsPurchasingComponent,
        ReportsBudgetsComponent,
        ReportsApprovalsComponent,
        ReportsTransactionsComponent,
        ReportsGlSpendComponent,
        ReportsAdminComponent,
        VendorManagementVendorsComponent,
        VendorManagementItemsComponent,
        VendorManagementItemPricesComponent,
        VendorManagementOrderGuidesComponent,
        SecurityUsersComponent,
        SecurityJobsComponent,
        SecuritySystemComponent,
        AdministrationLocationsComponent,
        AdministrationBusinessUnitsComponent,
        AdministrationGlSegmentsComponent,
        AdministrationGlAccountsComponent,
        AdministrationGlCodesComponent,
        AdministrationGlGroupsComponent,
        AdministrationApImportComponent,
        AdministrationNewsMessageComponent,
        AdministrationOrderRulesComponent,
        AdministrationInvoiceRulesComponent,
        AdministrationApprovalNotificationsComponent,
        AdministrationImportWizardComponent,
        BudgetBudgetsComponent,
        BudgetGroupsComponent,
        BudgetPeriodsComponent,
        BudgetPeriodValuesComponent,
        BudgetImportsComponent,
        ProfileChangePasswordComponent,
        ProfileEmailsComponent,
        ProfileExtendedUsersComponent,
        ProfileAlternativeShippingComponent,
        OrderShoppingCartsComponent,
        OrderRecurringOrdersComponent,
        OrderOrderEntryComponent,
        OrderQuickSearchComponent,
        OrderAdvancedSearchComponent,
        OrderBrowseComponent,
        OrderVendorDirectComponent,
        MenuTabComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        ),
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        CardModule,
        PasswordModule,
        MenubarModule,
        MenuModule,
        TabMenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
