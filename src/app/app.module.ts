import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
// Primeng
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
// Buyer Pages
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { ForgotPasswordComponent } from './shared/forgot-password/forgot-password.component';
import { ForgotPasswordSuccessComponent } from './shared/forgot-password-success/forgot-password-success.component';
import { MenuBarComponent } from './buyer/layout/menu-bar/menu-bar.component';
import { FooterComponent } from './buyer/layout/footer/footer.component';

import { MenuTabComponent } from './buyer/layout/menu-bar/menu-tab/menu-tab.component';
import { BuyerModule } from './buyer/buyer-home/buyer.module';

// Routing
const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'forgot-password-success', component: ForgotPasswordSuccessComponent }
];
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ForgotPasswordComponent,
        ForgotPasswordSuccessComponent,
        MenuBarComponent,
        FooterComponent,
        MenuTabComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        ),
        FormsModule,
        TableModule,
        HttpClientModule,
        
        BuyerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
