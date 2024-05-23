import { Component } from '@angular/core';
import { womenTop } from '../../products/Women/women_top';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProductService } from '../API/product/api-product.service';
import { ApiCartService } from '../API/cart/api-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  constructor(private _router:Router,private _activatedRoute:ActivatedRoute,private _api:ApiProductService,private cartService:ApiCartService){}

  selectedSize: any;
  reletedProduct:any;
  product:any;
  productId:any

  ngOnInit(){
    const id = this._activatedRoute.snapshot.paramMap.get('id')
    this.productId = id
    this._api.findProductById(id).subscribe(res => {
      this.product = res
      this.handleProductData(this.product)
    })
  }
  handleProductData(productData: any) {
    this.product = productData;
    console.log("out",this.product)
  }

  handalAddToCart(){
    const data = {size:this.selectedSize?this.selectedSize:'M',productId:this.productId}
    this.cartService.addItemToCart(data).subscribe(res=>{console.log(res)})
    console.log("Size",this.selectedSize)
    this.cartService.getCart().subscribe()
    this._router.navigate(['cart'])
  }

}
