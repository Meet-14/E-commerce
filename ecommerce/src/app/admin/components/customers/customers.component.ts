import { Component } from '@angular/core';
import { ApiCustomerService } from '../../../API/api-customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {

  userData:any

  constructor(private customerService:ApiCustomerService){}

  ngOnInit(){
    this.customerService.getAllUsers().subscribe(res=>{
      this.userData = res
    })
  }

}
