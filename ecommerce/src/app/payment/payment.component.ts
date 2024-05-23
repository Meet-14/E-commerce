import { Component } from '@angular/core';
import { ApiOrderService } from '../API/order/api-order.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  products = [1, 1, 1]
  order:any

  constructor(private _router:Router  ,private orderService: ApiOrderService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id")
    if(id){
      this.orderService.getOrderById(id).subscribe(res=>{
        console.log("Payment working:",res)
        this.order = res
        this.getData(this.order)
      })
    }
  }

  getData(orderData:any){
    this.order = orderData
    console.log(this.order.orderItems)
  }

  navigate(){
    Swal.fire(
      'Payment Successfully',
      'Thank You!!',
      'success'
    ).then((result) => {
      if (result.isConfirmed) {
        this._router.navigate(['/order']);
      }
    })
  }
}
