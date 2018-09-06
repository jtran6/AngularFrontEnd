import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
// Auth Pages
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { ForgotPasswordComponent } from './shared/forgot-password/forgot-password.component';
import { ForgotPasswordSuccessComponent } from './shared/forgot-password-success/forgot-password-success.component';
// Buyer
import { SharedModule } from './shared/shared.module';

// Routing
const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'forgot-password-success', component: ForgotPasswordSuccessComponent },
    { 
        path: 'buyer-home',
        loadChildren: './buyer/buyer-home/buyer.module#BuyerModule',
    }
];

const IMPORTS = [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
    ),
    FormsModule,
    HttpClientModule,
    SharedModule
];
const COMPONENTS = [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ForgotPasswordSuccessComponent
];
const EXPORTS = [];
@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports: [
        ...IMPORTS
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
