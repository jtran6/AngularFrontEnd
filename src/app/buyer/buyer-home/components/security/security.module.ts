import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityUsersComponent } from './security-users/security-users.component';
import { SecurityJobsComponent } from './security-jobs/security-jobs.component';
import { SecuritySystemComponent } from './security-system/security-system.component';
import { SecurityComponent } from './security.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    SecurityComponent,
    SecuritySystemComponent,
    SecurityJobsComponent,
    SecurityUsersComponent
  ]
})
export class SecurityModule { }
