import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-cars',
  templateUrl: './products-cars.component.html',
  styleUrl: './products-cars.component.css'
})
export class ProductsCarsComponent {
  constructor(private _router:Router){}
  @Input() product:any

  navigate(){
    this._router.navigate([`product-details/${this.product._id}`])
  }
}
