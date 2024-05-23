import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { AdminComponent } from './admin.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductCardComponent } from './components/admin-products/product-card/product-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderCardComponent } from './components/dashbord/order-card/order-card.component';
import { EditProductComponent } from './components/create-product/edit-product/edit-product.component';
import { CustomerCardComponent } from './components/customers/customer-card/customer-card.component';


@NgModule({
  declarations: [
    DashbordComponent,
    AdminComponent,
    AdminProductsComponent,
    OrderTableComponent,
    CustomersComponent,
    CreateProductComponent,
    ProductCardComponent,
    OrderCardComponent,
    EditProductComponent,
    CustomerCardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
