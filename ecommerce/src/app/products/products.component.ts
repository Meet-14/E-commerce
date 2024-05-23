import { Component, ViewEncapsulation } from '@angular/core';
import { filters, singleFilter } from './filterData';
import { menJeans } from '../../products/Men/men_jeans';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProductService } from '../API/product/api-product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent {
  filterData: any
  singleFilterData: any
  menJeans: any
  product: any
  levelThree:any

  constructor(private _activatedRoute: ActivatedRoute, private _api: ApiProductService, private _router: Router) { }

  ngOnInit() {
    this.filterData = filters
    this.singleFilterData = singleFilter

    this._activatedRoute.paramMap.subscribe(
      (params) => {
        console.log("params:", params)
        this.levelThree = params.get("levelThree")
        var reqData = {
          category: params.get("levelThree"),
          colors: [],
          sizes: [],
          minPrice: 0,
          maxPrice: 99999,
          pageNumber: 1,
          pageSize: 0,
          stock: 'in_stock',
          sort: 1,
          minDiscount: 0,
        }
        console.log(reqData)
        this._api.findProductByCategory(reqData).subscribe(res => {
          const products = res.content;
          this.product = products
        })
      }
    )
    this._activatedRoute.queryParams.subscribe((params)=>{
      const color = params['color']
      const size = params['size']
      const price = params['price']
      const discount = params['minDiscount']
      const minPrice = price?.split("-")[0]
      const maxPrice = price?.split("-")[1]
      const sort = params['sort']

      var reqData = {
        category: this.levelThree,
        colors: color?color:[],
        sizes: size?size:[],
        maxPrice:maxPrice?maxPrice:99999,
        minPrice:minPrice?minPrice:0,
        pageNumber: 1,
        pageSize: 0,
        stock: 'in_stock',
        sort: sort?sort:'',
        minDiscount: discount?discount:0,
      }
      this._api.findProductByCategory(reqData).subscribe(res => {
        const products = res.content;
        this.product = products
      })
    })
  }

  handleMultipleSelectFilter(value: string, sectionId: string) {
    const queryParams = { ...this._activatedRoute.snapshot.queryParams };

    const filterValues = queryParams[sectionId] ? queryParams[sectionId].split(",") : [];

    const valueIndex = filterValues.indexOf(value);


    if (valueIndex !== -1) {
      filterValues.splice(valueIndex, 1);
    }
    else {
      filterValues.push(value);
    }

    if (filterValues.length > 0) {
      queryParams[sectionId] = filterValues.join(",");
    }
    else {
      delete queryParams[sectionId];
    }

    this._router.navigate([], { queryParams });
  }

  handleSingleSelectFilter(value: string, sectionId: string) {
    const queryParams = { ...this._activatedRoute.snapshot.queryParams };
    queryParams[sectionId] = value
    this._router.navigate([], { queryParams });
  }

}
