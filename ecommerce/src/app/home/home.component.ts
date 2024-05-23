import { Component } from '@angular/core';
import { menJeans } from '../../products/Men/men_jeans';
import { kurtas } from '../../products/Men/men_kurta';
import { MenShirt } from '../../products/Men/men_shirt';
import { womenTop } from '../../products/Women/women_top';
import { ApiProductService } from '../API/product/api-product.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  Jeans: any
  Mens_kurta:any
  Men_Shirt:any
  womenTop:any
  product:any
  MenJeans:any
  constructor(private _api:ApiProductService){}

  ngOnInit() {
    this.getProductByCategory('men_jeans').subscribe(data => {
      this.Jeans = data
      console.log("Men data", this.MenJeans);
    });

    this.getProductByCategory('mens_Shirt').subscribe(data => {
      this.Men_Shirt = data
      console.log("Men data", this.MenJeans);
    });

    this.getProductByCategory('top').subscribe(data => {
      this.womenTop = data
      console.log("Men data", this.MenJeans);
    });

    this.getProductByCategory('mens_kurta').subscribe(data => {
      this.Mens_kurta = data
      console.log("Men data", this.MenJeans);
    });
  }

  getProductByCategory(category: string) {
    var reqData = {
      category: category,
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 99999,
      pageNumber: 1,
      pageSize: 5,
      stock: 'in_stock',
      sort: 1,
      minDiscount: 0,
    };

    return this._api.findProductByCategory(reqData).pipe(
      map(res => res.content)
    );
  }
}
