import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationImportWizardComponent } from './administration-import-wizard/administration-import-wizard.component';
import { AdministrationApprovalNotificationsComponent } from './administration-approval-notifications/administration-approval-notifications.component';
import { AdministrationInvoiceRulesComponent } from './administration-invoice-rules/administration-invoice-rules.component';
import { AdministrationOrderRulesComponent } from './administration-order-rules/administration-order-rules.component';
import { AdministrationNewsMessageComponent } from './administration-news-message/administration-news-message.component';
import { AdministrationApImportComponent } from './administration-ap-import/administration-ap-import.component';
import { AdministrationGlGroupsComponent } from './administration-gl-groups/administration-gl-groups.component';
import { AdministrationGlCodesComponent } from './administration-gl-codes/administration-gl-codes.component';
import { AdministrationGlAccountsComponent } from './administration-gl-accounts/administration-gl-accounts.component';
import { AdministrationGlSegmentsComponent } from './administration-gl-segments/administration-gl-segments.component';
import { AdministrationBusinessUnitsComponent } from './administration-business-units/administration-business-units.component';
import { AdministrationLocationsComponent } from './administration-locations/administration-locations.component';
import { AdministrationComponent } from './administration.component';

const COMPONENTS = [
  AdministrationComponent,
  AdministrationImportWizardComponent,
  AdministrationApprovalNotificationsComponent,
  AdministrationInvoiceRulesComponent,
  AdministrationOrderRulesComponent,
  AdministrationNewsMessageComponent,
  AdministrationApImportComponent,
  AdministrationGlGroupsComponent,
  AdministrationGlCodesComponent,
  AdministrationGlAccountsComponent,
  AdministrationGlSegmentsComponent,
  AdministrationBusinessUnitsComponent,
  AdministrationLocationsComponent
];

const IMPORTS = [
  CommonModule
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
export class AdministrationModule { }
