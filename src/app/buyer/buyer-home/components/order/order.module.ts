import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderVendorDirectComponent } from './order-vendor-direct/order-vendor-direct.component';
import { OrderBrowseComponent } from './order-browse/order-browse.component';
import { OrderAdvancedSearchComponent } from './order-advanced-search/order-advanced-search.component';
import { OrderQuickSearchComponent } from './order-quick-search/order-quick-search.component';
import { OrderOrderEntryComponent } from './order-order-entry/order-order-entry.component';
import { OrderRecurringOrdersComponent } from './order-recurring-orders/order-recurring-orders.component';
import { OrderShoppingCartsComponent } from './order-shopping-carts/order-shopping-carts.component';
import { OrderComponent } from './order.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    OrderComponent,
    OrderVendorDirectComponent,
    OrderBrowseComponent,
    OrderAdvancedSearchComponent,
    OrderQuickSearchComponent,
    OrderOrderEntryComponent,
    OrderRecurringOrdersComponent,
    OrderShoppingCartsComponent
  ]
})
export class OrderModule { }
