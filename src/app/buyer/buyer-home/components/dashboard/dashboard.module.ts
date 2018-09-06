import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardReportsComponent } from './dashboard-reports/dashboard-reports.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardComponent } from './dashboard.component';
import { CardModule } from 'primeng/card';
import { SharedModule } from '../../../../shared/shared.module';

const COMPONENTS = [
  DashboardReportsComponent,
  DashboardHomeComponent,
  DashboardComponent
];

const IMPORTS = [
  CommonModule,
  SharedModule
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
export class DashboardModule { }
