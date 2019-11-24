import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product;
  productImages;
  activeImgIndex = 0;
  constructor(private productSerive: ProductService, private apiService: ApiService) { }

  ngOnInit() {
    this.productSerive.selectedProduct.subscribe(product => {
      if (product) {
        this.apiService.getProductImages(product.id).subscribe(images => {
          product=JSON.parse(JSON.stringify(product)) ;
          product.image.url=images['length']?images[0].url:product.image.url;
          this.product =product;
          this.activeImgIndex = 0;
          this.productImages = images;
        })
      }
    })
  }

  changeImage(index){
    this.activeImgIndex=index;
    this.product.image.url=  this.productImages[index].url;
  }

}
