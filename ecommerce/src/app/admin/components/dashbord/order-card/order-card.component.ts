import { Component, Input } from '@angular/core';
import { ApiOrderService } from '../../../../API/order/api-order.service';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.css'
})
export class OrderCardComponent {

  constructor(private orderService:ApiOrderService){}

  @Input() orderStatus: any;
  @Input() orderItems: any;
  @Input() orderId:any

  ngOnInit(){
    
  }
  confirmOrder(){
    this.orderService.confirmOrder(this.orderId).subscribe(res=>{
      console.log(res);
    })
  }

  shipOrder(){
    this.orderService.shipOrder(this.orderId).subscribe(res=>{
      console.log(res)
    })
  }

  deleverOrder(){
    this.orderService.deliverOrder(this.orderId).subscribe(res=>{
      console.log(res)
    })
  }

  calcleOrder(){
    this.orderService.cancleOrder(this.orderId).subscribe(res=>{
      console.log(res)
    })
  }

  deleteOrder(){
    this.orderService.deleteOrder(this.orderId).subscribe(res=>{
      console.log(res)
    })
  }

}
