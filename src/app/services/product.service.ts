import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  selectedProduct = new BehaviorSubject(undefined); 

  setProduct(product){
    this.selectedProduct.next(product);
  }

  getProduct(){
    return this.selectedProduct.getValue();
  }

}
