import { Component } from '@angular/core';
import { ApiOrderService } from '../../../API/order/api-order.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent {

  constructor(private orderService:ApiOrderService){}

  orderData:any
  Orders = [[1,1],[1,1,1]]
  ngOnInit(){
    this.orderService.getAllOrders().subscribe(res=>{
      this.getOrderData(res);
    })
  }

  getOrderData(Odata:any){
    this.orderData = Odata;
  }
}
