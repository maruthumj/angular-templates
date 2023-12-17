import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './e-commerce/home-page/home-page.component';
import { ProfilePageComponent } from './e-commerce/profile-page/profile-page.component';
import { CheckoutComponent } from './e-commerce/checkout/checkout.component';
import { OrdersComponent } from './e-commerce/orders/orders.component';
import { MenubarModule } from 'primeng/menubar';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProfilePageComponent,
    CheckoutComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
