import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { AdminComponent } from './admin.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { EditProductComponent } from './components/create-product/edit-product/edit-product.component';

const routes: Routes = [
  {path:'',component:AdminComponent,children:[
    {path:'',component:DashbordComponent},
    {path:'products',component:AdminProductsComponent},
    {path:'order',component:OrderTableComponent},
    {path:'customer',component:CustomersComponent},
    {path:'addProduct',component:CreateProductComponent},
    {path:'editProduct/:id',component:EditProductComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
