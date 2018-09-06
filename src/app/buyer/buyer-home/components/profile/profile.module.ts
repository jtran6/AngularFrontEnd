import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileChangePasswordComponent } from './profile-change-password/profile-change-password.component';
import { ProfileEmailsComponent } from './profile-emails/profile-emails.component';
import { ProfileAlternativeShippingComponent } from './profile-alternative-shipping/profile-alternative-shipping.component';
import { ProfileExtendedUsersComponent } from './profile-extended-users/profile-extended-users.component';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProfileComponent,
    ProfileAlternativeShippingComponent,
    ProfileExtendedUsersComponent,
    ProfileEmailsComponent,
    ProfileChangePasswordComponent
  ]
})
export class ProfileModule { }
