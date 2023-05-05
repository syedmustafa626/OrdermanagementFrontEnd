import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  readonly productsUrl = "http://localhost:55277/api/products";
  readonly ppUrl = "http://localhost:55277/api/categories";

  constructor(public objcHttp:HttpClient) { }

  productsList: Products[];
  productsData: Products=new Products();

  getProducts() { 
    this.objcHttp.get(this.productsUrl).toPromise().then(res => this.productsList = res as Products[])
    console.log(this.productsList);
  }

  getProductsById() { 
    this.objcHttp.get(this.productsUrl + "/" +this.productsData.ProductId).toPromise().then(res => this.productsList = res as Products[])
  }

  postProducts() {
    return this.objcHttp.post(this.productsUrl, this.productsData);
  }

  putProducts() {
    return this.objcHttp.put(this.productsUrl + "/" + this.productsData.ProductId, this.productsData)
  }

  delProducts(ProductId) {
    return this.objcHttp.delete(this.productsUrl + "/" + ProductId);
  }
}
