import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorManagementOrderGuidesComponent } from './vendor-management-order-guides/vendor-management-order-guides.component';
import { VendorManagementItemPricesComponent } from './vendor-management-item-prices/vendor-management-item-prices.component';
import { VendorManagementItemsComponent } from './vendor-management-items/vendor-management-items.component';
import { VendorManagementVendorsComponent } from './vendor-management-vendors/vendor-management-vendors.component';
import { VendorManagementComponent } from './vendor-management.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VendorManagementOrderGuidesComponent,
    VendorManagementItemPricesComponent,
    VendorManagementItemsComponent,
    VendorManagementVendorsComponent,
    VendorManagementComponent,
  ]
})
export class VendorManagementModule { }
