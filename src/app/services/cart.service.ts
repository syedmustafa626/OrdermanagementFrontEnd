import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  readonly cartUrl = "http://localhost:55277/api/carts";

  constructor(public objcHttp:HttpClient) { }

  cartList: Cart[];
  cartData: Cart=new Cart();

  getcart() { 
    this.objcHttp.get(this.cartUrl).toPromise().then(res => this.cartList = res as Cart[])
  }

  postcart() {
    return this.objcHttp.post(this.cartUrl, this.cartData);
  }

  putcart() {
    return this.objcHttp.put(this.cartUrl + "/" + this.cartData.ProductId, this.cartData)
  }

  delcart(CartId) {
    return this.objcHttp.delete(this.cartUrl + "/" + CartId);
  }
}
