import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiOrderService } from '../../API/order/api-order.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.css'
})
export class AddressFormComponent {

  constructor(private _formBuilder:FormBuilder,private orderService:ApiOrderService){}
  address=[1,1,1]

  myForm:FormGroup=this._formBuilder.group({
    firstName:["",Validators.required],
    lastNmae:["",Validators.required],
    streatAddress:["",Validators.required],
    city:["",Validators.required],
    state:["",Validators.required],
    zipCode:["",Validators.required],
    mobile:["",Validators.required],
  })
  handleSubmit(){
    if(this.myForm.valid){
      const formValue = this.myForm.value
      console.log(this.myForm.value)
      this.orderService.createOrder(formValue).subscribe(res =>{
        console.log(res)
      })
    }
  }
  handleCreateOrder(){}
}
