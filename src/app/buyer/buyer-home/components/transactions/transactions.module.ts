import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsFileImportComponent } from './transactions-file-import/transactions-file-import.component';
import { TransactionsRequisitionsComponent } from './transactions-requisitions/transactions-requisitions.component';
import { TransactionsOfflineInvoiceEntryComponent } from './transactions-offline-invoice-entry/transactions-offline-invoice-entry.component';
import { TransactionsOrderResubmitComponent } from './transactions-order-resubmit/transactions-order-resubmit.component';
import { TransactionsOfflineEntriesComponent } from './transactions-offline-entries/transactions-offline-entries.component';
import { TransactionsHoldComponent } from './transactions-hold/transactions-hold.component';
import { TransactionsInvoiceApprovalsComponent } from './transactions-invoice-approvals/transactions-invoice-approvals.component';
import { TransactionsInvoicesComponent } from './transactions-invoices/transactions-invoices.component';
import { TransactionsOrderApprovalsComponent } from './transactions-order-approvals/transactions-order-approvals.component';
import { TransactionsOrderComponent } from './transactions-order/transactions-order.component';
import { TransactionsComponent } from './transactions.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    TransactionsComponent,
    TransactionsRequisitionsComponent,
    TransactionsFileImportComponent,
    TransactionsOfflineInvoiceEntryComponent,
    TransactionsOrderResubmitComponent,
    TransactionsOfflineEntriesComponent,
    TransactionsHoldComponent,
    TransactionsInvoiceApprovalsComponent,
    TransactionsInvoicesComponent,
    TransactionsOrderApprovalsComponent,
    TransactionsOrderComponent
  ]
})
export class TransactionsModule { }
