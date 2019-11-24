import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ProductService } from 'src/app/services/product.service';

import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface,SwiperModule } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-product-recommandations',
  templateUrl: './product-recommandations.component.html',
  styleUrls: ['./product-recommandations.component.scss']
})
export class ProductRecommandationsComponent implements OnInit {
  products;
  randomLabels=["Los Angeles Favorite","SOLD OUT","Only one left"];
  imagesCounter=0;
  show=true;
  type='directive';
  config:SwiperConfigInterface;
  constructor(private apiSerive:ApiService,private productService:ProductService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this.apiSerive.getProducts().subscribe(products=>{
      this.products=products.map(product=>{
          product.label=this.getRandomLabel();
          return product;
      });
      if(this.products.length)
        this.productService.setProduct(this.products[0]);
    })
  }

  loadImage(){
    this.imagesCounter++;
    if(this.imagesCounter==this.products.length){
      this.show=true;
      this.config={
        direction: 'horizontal',
        slidesPerView: 4,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        preloadImages: true,
        updateOnImagesReady: true
      };
    }
  }

  changeProduct(product){
    this.productService.setProduct(product);
  }

  getRandomLabel(){
    let randomInndex= Math.floor(Math.random() * (this.randomLabels.length));
    return this.randomLabels[randomInndex];
  }

}
