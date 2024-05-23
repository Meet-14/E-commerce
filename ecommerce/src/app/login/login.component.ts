import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCustomerService } from '../API/api-customer.service';
import { NgFor } from '@angular/common';
import swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private customerService: ApiCustomerService,private _router:Router) { }

  errMsg = '';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })
  checkLogin() {
    if (this.loginForm.valid) {
      this.customerService.login(this.loginForm.value).subscribe({
        next: (res: any) => {
          console.log(res);
          swal.fire(
            'Welcome to AttireApex',
            'Login Successfully!',
            'success'
          ).then((result) => {
            if (result.isConfirmed) {
              this._router.navigate(['/']);
            }
          });
        },
        error: (error) => {
          console.error('Error:', error);
          swal.fire(
            'Login Failed!',
            'Invalid User and Password',
            'error'
          );
        }
      });
      console.log(this.loginForm.value);
    }
  }
}   
