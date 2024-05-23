import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authenicationGuard } from './authenication.guard';
import { SininComponent } from './login/sinin/sinin.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { AdminRoutingModule } from './admin/admin-routing.module';

const routes: Routes = [
  {path:'admin',loadChildren:()=>import('./admin/admin-routing.module').then(m=>AdminRoutingModule)},
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signin',component:SininComponent},
  {path:'cart',component:CartComponent},
  {path:'product-details/:id',component:ProductDetailsComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'checkout/payment/:id',component:PaymentComponent},
  {path:':levelOne/:levelTwo/:levelThree',component:ProductsComponent},
  {path:'order',component:OrderComponent},
  {path:'order/:id',component:OrderDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
