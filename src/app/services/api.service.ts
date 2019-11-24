import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import config from '../configs/config';
import { forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<[]>(config.getProductsUrl).pipe(
      switchMap(products => forkJoin(products.map(i=>this.getProductImage(i))))
    )
  }
  getProductImage(product){
    return this.http.get(config.getProductImages+"/"+product.id).pipe(
      map(resp => (product.image = resp, product)))
  }

  getProduct(id){
    return this.http.get(config.getProductsUrl+"/"+id);
  }



  getProductImages(id){
    let string=JSON.stringify( {"where":{"productId":id}});
    return this.http.get(config.getProductImages+'?filter='+string);
  }

}
