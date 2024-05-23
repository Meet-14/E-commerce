import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css'
})
export class ProductSliderComponent {
  @Input()title:any
  @Input()product:any

  ngOnInit(){
    console.log(this.product)
  }
}
