import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiOrderService {

  apiUrl = 'http://localhost:3000'
  private headers: any;

  constructor(private _http: HttpClient, private _route: ActivatedRoute, private _router: Router) {
    this.headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-type': 'application/json'
    })
  }

  createOrder(reqData: any) {
    console.log("cerate order", reqData)
    const url = `${this.apiUrl}/api/orders/`

    return this._http.post(url, reqData, { headers: this.headers }).pipe(
      map((data: any) => {

        console.log("created order", data);
        if (data._id) {
          console.log("its Run")
          this._router.navigate([`/checkout/payment/${data._id}`], {
            queryParams: { order_id: data._id }
          });
        }
        console.log("Order Created - ",data)
        return data
      }),
      catchError((error: any) => {
        console.log(error)
        return throwError(() => error);
      })
    )
  }

  getOrderById(orderId:any){
    const url = `${this.apiUrl}/api/orders/${orderId}`
    console.log("get Order By Id")

    return this._http.get(url,{headers:this.headers}).pipe(
      map((data: any) => {
        console.log("order by id :: ", data)
        return data
      }),
      catchError((error: any) => {
        console.log(error)
        return throwError(() => error);
      })
    )
  }

  getOrderHistory(){
    const url = `${this.apiUrl}/api/orders/user`
    console.log("geting User History")

    return this._http.get(url,{headers:this.headers}).pipe(
      map((data: any) => {
        console.log("User order history :: ", data)
        return data
      }),
      catchError((error: any) => {
        console.log("Catch error",error)
        return throwError(() => error);
      })
    )
  }

  getAllOrders(){
    const url = `${this.apiUrl}/api/admin/orders`
    return this._http.get(url,{headers:this.headers}).pipe(
      map((data: any) => {
        console.log(" All order :: ", data)
        return data
      }),
      catchError((error: any) => {
        console.log(error)
        return throwError(() => error);
      })
    )
  }

  confirmOrder(orderId:any){
    return this._http.put(`${this.apiUrl}/api/admin/orders/${orderId}/confirmed`,{},{headers:this.headers})
  }

  shipOrder(orderId:any){
    return this._http.put(`${this.apiUrl}/api/admin/orders/${orderId}/ship`,{},{headers:this.headers})
  }

  deliverOrder(orderId:any){
    return this._http.put(`${this.apiUrl}/api/admin/orders/${orderId}/deliver`,{},{headers:this.headers})
  }

  cancleOrder(orderId:any){
    return this._http.put(`${this.apiUrl}/api/admin/orders/${orderId}/cancle`,{},{headers:this.headers})
  }
  deleteOrder(orderId:any){
    return this._http.delete(`${this.apiUrl}/api/admin/orders/${orderId}/delete`,{headers:this.headers})
  }
}
