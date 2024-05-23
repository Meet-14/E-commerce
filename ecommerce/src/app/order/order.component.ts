import { Component } from '@angular/core';
import { ApiOrderService } from '../API/order/api-order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  Orders = [[1,1,1],[1,1]]
  orderData:any
  constructor(private orderService:ApiOrderService){}

  ngOnInit(){
    this.orderService.getOrderHistory().subscribe(res=>{
      this.getOrderData(res);
    })
  }

  getOrderData(Odata:any){
    this.orderData = Odata;
  }
}
