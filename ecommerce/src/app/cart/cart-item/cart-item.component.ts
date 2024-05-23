import { Component, Input } from '@angular/core';
import { ApiProductService } from '../../API/product/api-product.service';
import { ApiCartService } from '../../API/cart/api-cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() shoshowButton: any
  @Input() cartItem: any

  constructor(private cartService: ApiCartService) { }

  updateCartItem(num: number) {
    this.cartService.updateCartItem({ cartItemId: this.cartItem._id, data: { quantity: num + this.cartItem.quantity } }).subscribe()
    console.log(this.cartItem._id)
    console.log("num", num)
  }
  removeCartItem() { 
    this.cartService.removeCartItem(this.cartItem._id).subscribe()
  }
}
