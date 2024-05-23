import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainCorouselComponent } from './home/main-corousel/main-corousel.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProductCardComponent } from './home/product-card/product-card.component';
import { ProductSliderComponent } from './home/product-slider/product-slider.component';
import { SininComponent } from './login/sinin/sinin.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NavbarComponent } from './navbar/navbar.component';
import { NavContentComponent } from './navbar/nav-content/nav-content.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ProductsCarsComponent } from './products/products-cards/products-cars.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { AdminModule } from './admin/admin.module';
import { Router } from '@angular/router';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { AddressFormComponent } from './checkout/address-form/address-form.component';
import { AddressCardComponent } from './checkout/address-card/address-card.component';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { OrderCardComponent } from './order/order-card/order-card.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainCorouselComponent,
    LoginComponent,
    ProductCardComponent,
    ProductSliderComponent,
    SininComponent,
    NavbarComponent,
    NavContentComponent,
    FooterComponent,
    ProductsComponent,
    ProductsCarsComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    PaymentComponent,
    OrderComponent,
    OrderDetailComponent,
    CartItemComponent,
    AddressFormComponent,
    AddressCardComponent,
    OrderCardComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatRadioModule,
    AdminModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
