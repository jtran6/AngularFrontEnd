import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BuyerHomeComponent } from './buyer-home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Routing
const buyerRoutes: Routes = [
  {
    path: '', 
    component: BuyerHomeComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
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
