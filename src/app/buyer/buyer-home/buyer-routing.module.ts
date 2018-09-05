import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './components/dashboard/dashboard-home/dashboard-home.component';
import { DashboardReportsComponent } from './components/dashboard/dashboard-reports/dashboard-reports.component';
import { OrderShoppingCartsComponent } from './components/order/order-shopping-carts/order-shopping-carts.component';

// Routing
const buyerRoutes: Routes = [
  {path: 'dashboard/home', component: DashboardHomeComponent},
  {path: 'dashboard/reports', component: DashboardReportsComponent},
  {path: 'order/shoppingcarts', component: OrderShoppingCartsComponent},
  {path: 'order/shoppingcarts', component: OrderShoppingCartsComponent}
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
