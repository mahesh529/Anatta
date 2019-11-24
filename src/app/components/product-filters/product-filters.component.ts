import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss']
})
export class ProductFiltersComponent implements OnInit {
  product;
  activeGender="men";
  activeColorIndex=3;
  activeSizeIndex=5;
  colors=[["#F7F7F7"],["#072348"],["#000000"],["#B5222E"],["#FFCF60"],["#4E4E4E"],["#129F7D"],["#C69F97"],["#000000","#ffffff"],["#215297"],["#B3926E"]];
  sizes=[5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13];
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.selectedProduct.subscribe(data=>{
      this.product=data;
    })
  }

}
