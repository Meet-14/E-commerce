import { Component } from '@angular/core';
import { ApiProductService } from '../../../API/product/api-product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent {
  constructor(private _api:ApiProductService){}
  product:any
  ngOnInit(){
    this._api.getAllProducts().subscribe(res=>{
      this.product = res
      console.log(this.product)
    })
  }
}
