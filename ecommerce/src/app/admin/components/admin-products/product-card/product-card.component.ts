import { Component, Input } from '@angular/core';
import { ApiProductService } from '../../../../API/product/api-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product:any

  constructor(private _api:ApiProductService,private router:Router){}

  deleteProduct(){
    this._api.deleteProduct(this.product._id).subscribe()
  }

  editProduct(){
    this.router.navigate([`/admin/editProduct/${this.product._id}`]);
  }

}
