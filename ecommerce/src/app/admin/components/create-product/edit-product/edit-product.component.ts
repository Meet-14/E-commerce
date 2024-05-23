import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProductService } from '../../../../API/product/api-product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {

  constructor(private _formBuilder:FormBuilder,private route: ActivatedRoute,private productService:ApiProductService,private router:Router){}

  id:any
  product:any
  productData:any
  productForm:FormGroup=this._formBuilder.group({
    imageUrl: new FormControl('',Validators.required),
    brand: new FormControl('',Validators.required),
    title: new FormControl('',Validators.required),
    color: new FormControl('',Validators.required),
    discountedPrice: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    discountPersent: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    thirdLevelCategory: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
  })

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('ID:', this.id);
    });

    this.productService.findProductById(this.id).subscribe(res=>{
      console.log(res)
      this.productData = res;
      this.initializeForm();
    })
  }

  initializeForm() {
    this.productForm.patchValue({
      imageUrl: this.productData.imageUrl,
      brand: this.productData.brand,
      title: this.productData.title,
      color: this.productData.color,
      discountedPrice: this.productData.discountedPrice,
      price: this.productData.price,
      discountPersent: this.productData.discountPersent,
      quantity: this.productData.quantity,
      thirdLevelCategory: this.productData.category.name,
      description: this.productData.description
    });
  }

  edit(){
    if(this.productForm.valid){
      console.log(this.productForm.value)
      this.productService.updateProduct(this.id,this.productForm.value).subscribe(res=>{
        console.log(res)
      })
      this.router.navigate(['/admin/products']); 
    }
  }

  

}
