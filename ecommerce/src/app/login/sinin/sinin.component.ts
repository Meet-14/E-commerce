import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCustomerService } from '../../API/api-customer.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-sinin',
  templateUrl: './sinin.component.html',
  styleUrl: './sinin.component.css'
})
export class SininComponent {
  errMsg = '';
  constructor(private _api: ApiCustomerService,private _router:Router) { }

  loginForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phoneNo: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  addUser() {
    if (this.loginForm.valid) {
      this._api.signUp(this.loginForm.value).subscribe({
        next: (res: any) => {
          console.log(res);
          swal.fire(
            'sign up Successfully',
            'please login',
            'success'
          ).then((result) => {
            if (result.isConfirmed) {
              this._router.navigate(['/login']);
            }
          });
        },
        error: (error) => {
          console.error('Error:', error);
          swal.fire(
            'SignUp Failed!',
            'Enter Another Email',
            'error'
          );
        }
      });
    } else {
      this.errMsg = 'Please enter proper fields';
    }
  }
}
