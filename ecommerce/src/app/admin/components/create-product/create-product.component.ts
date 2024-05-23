import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiProductService } from '../../../API/product/api-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  constructor(private _formBuilder:FormBuilder,private productService:ApiProductService,private router:Router){}
  
  productForm:FormGroup=this._formBuilder.group({
    imageUrl: new FormControl('',Validators.required),
    brand: new FormControl('',Validators.required),
    title: new FormControl('',Validators.required),
    color: new FormControl('',Validators.required),
    discountedPrice: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    discountPersent: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    topLevelCategory: new FormControl('',Validators.required),
    secondLevelCategory: new FormControl('',Validators.required),
    thirdLevelCategory: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
  })

  addProcuct(){
    if(this.productForm.valid){
      console.log(this.productForm.value)
      this.productService.createProduct(this.productForm.value).subscribe(res=>{
        console.log(res)
      })
      this.router.navigate(['/admin/products']); 
    }
  }
}