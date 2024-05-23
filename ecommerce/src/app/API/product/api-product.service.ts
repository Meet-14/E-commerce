import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  constructor(private _http: HttpClient, private _route: ActivatedRoute, private _router: Router) { }

  private getHeader(): HttpHeaders {
    const token = localStorage.getItem('jwt')
    return new HttpHeaders().set("Autorization", `Bearer ${token}`);
  }
  apiUrl = 'http://localhost:3000'

  getAllProducts() {
    return this._http.get('http://localhost:3000/product').pipe(
      map((data: any) => {
        return data;
      }),
      catchError((error: any) => {
        console.error("Error fetching products:", error);
        return throwError(() => error);
      })
    );
  }

  createProduct(productData:any){
    return this._http.post('http://localhost:3000/api/admin/product',productData).pipe(
      map((data: any) => {
        return data;
      }),
      catchError((error: any) => {
        console.error("Error fetching products:", error);
        return throwError(() => error);
      })
    );
  }

  updateProduct(productId:any,data:any){
    const url = `${this.apiUrl}/api/admin/product/${productId}`
    return this._http.put(url,data)
  }

  deleteProduct(productId:any){
    const url = `${this.apiUrl}/api/admin/product/${productId}`
    return this._http.delete(url)
  }

  findProductByCategory(reqData: any) {
    const { colors, pageNumber, pageSize, sizes, minPrice, maxPrice, minDiscount, category, stock, sort } = reqData;
    let params = new HttpParams()
      .set("color", colors)
      .set("sizes", sizes)
      .set("minPrice", minPrice)
      .set("maxPrice", maxPrice)
      .set("minDiscount", minDiscount)
      .set("category", category)
      .set('sort', sort)
      .set('stock', stock)
      .set('pageNumber', pageNumber)
      .set("pageSize", pageSize);

    return this._http.get<any>('http://localhost:3000/api/product', { params }).pipe(
      map((data: any) => {
        console.log("Product Data", data);
        return data;
      }),
      catchError((error: any) => {
        console.error("Error fetching products:", error);
        return throwError(() => error);
      })
    );
  }

  findProductById(productId: any) {

    const headers = this.getHeader();
    return this._http.get(`${this.apiUrl}/api/product/id/${productId}`, { headers }).pipe(
      map((data: any) => {
        console.log("Product Data", data)
        return data
      }),
      catchError((error: any) => {
        console.log(error)
        return throwError(() => error);
      })
    )
  }
}
