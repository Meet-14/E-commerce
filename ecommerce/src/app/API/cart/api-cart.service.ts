import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCartService {

  constructor(private _http: HttpClient, private _route: ActivatedRoute,private _router: Router) { }

  apiUrl = 'http://localhost:3000'

  addItemToCart(reqData: any) {
    const url = `${this.apiUrl}/api/cart/add`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-type': 'application/json'
    })
    console.log(reqData)
    return this._http.put(url, reqData, { headers }).pipe(
      map((data: any) => {
        console.log("Cart Item added", data) 
        return data
      }),
      catchError((error: any) => {
        console.log("catch",error)
        return throwError(() => error);
      })
    )

  }

  getCart() {
    const url = `${this.apiUrl}/api/cart/`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-type': 'application/json'
    });

    return this._http.get(url, { headers }).pipe(
      map((data: any) => {
        console.log("Cart :: ", data)
        return data
      }),
      catchError((error: any) => {
        console.log(error)
        return throwError(() => error);
      })
    )
  }

  removeCartItem(cartItemId: any) {
    const url = `${this.apiUrl}/api/cart_items/${cartItemId}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-type': 'application/json'
    });
    return this._http.delete(url,{headers}).pipe(
      map((data: any) => {
        console.log("item removed :: ", data)
        return data
      }),
      catchError((error: any) => {
        console.log(error)
        return throwError(() => error);
      })
    )
  }

  updateCartItem(reqData:any){
    const url = `${this.apiUrl}/api/cart_items/${reqData.cartItemId}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-type': 'application/json'
    });

    return this._http.put(url,reqData.data,{headers}).pipe(
      map((data: any) => {
        console.log("item Updated :: ", data)
        return data
      }),
      catchError((error: any) => {
        console.log(error)
        return throwError(() => error);
      })
    )
  }

}
