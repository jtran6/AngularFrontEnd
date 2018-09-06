import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardReportsComponent } from './dashboard-reports/dashboard-reports.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardComponent } from './dashboard.component';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
  ],
  declarations: [
    DashboardReportsComponent,
    DashboardHomeComponent,
    DashboardComponent
  ]
})
export class DashboardModule { }
