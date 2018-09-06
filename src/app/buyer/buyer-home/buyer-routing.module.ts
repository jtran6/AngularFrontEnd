import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { OrderModule } from './components/order/order.module';

// Routing
const buyerRoutes: Routes = [
  {path: 'dashboard', component: DashboardModule},
  {path: 'order', component: OrderModule}
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
