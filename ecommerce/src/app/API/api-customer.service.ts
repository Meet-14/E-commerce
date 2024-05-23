import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCustomerService {
  apiUrl = 'http://localhost:3000/auth'
  constructor(private _http:HttpClient) { }

  login(loginData:any){
    return this._http.post(`${this.apiUrl}/signin`,loginData).pipe(
      map((user:any)=>{
        console.log('login user',user)
        if(user.jwt){
          localStorage.setItem('jwt',user.jwt)
        }
      })
    )
  }

  getAllUsers(){
    return this._http.get(`http://localhost:3000/api/users`).pipe(
      map((data: any) => {
        return data;
      }),
      catchError((error: any) => {
        console.error("Error fetching User:", error);
        return throwError(() => error);
      })
    );
  }
  signUp(userData:any){
    return this._http.post(`${this.apiUrl}/signup`,userData).pipe(
      map((user:any)=>{
        console.log('signup user',user)
        if(user.jwt){
          localStorage.setItem('jwt',user.jwt)
        }
      })
    )
  }
}
