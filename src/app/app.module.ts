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
// Pages
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { BuyerHomeComponent } from './buyer/buyer-home/buyer-home.component';

// Routing
const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'app-buyer-home', component: BuyerHomeComponent }
];
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        BuyerHomeComponent
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
        InputTextModule,
        DialogModule,
        ButtonModule,
        CardModule,
        PasswordModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
