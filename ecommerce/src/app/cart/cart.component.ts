import { Component } from '@angular/core';
import { ApiCartService } from '../API/cart/api-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
    cart=[1,1,1]
    cartItems:any
    data:any
    cartData:any

    constructor(private cartService:ApiCartService){}

    ngOnInit(){
      this.cartService.getCart().subscribe(res=>{
        this.data = res
        this.getCartItems(this.data)
      })
    }

    getCartItems(cartData:any){
      console.log(cartData)
      this.cartData = cartData
      this.cartItems = cartData.cartItems
      console.log(this.cartItems)

    }
}
