import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orders } from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  readonly ordersUrl = "http://localhost:55277/api/orders";

  constructor(public objcHttp:HttpClient) { }

  ordersList: Orders[];
  ordersData: Orders=new Orders();

  getorders() { 
    this.objcHttp.get(this.ordersUrl).toPromise().then(res => this.ordersList = res as Orders[])
  }

  postorders() {
    return this.objcHttp.post(this.ordersUrl, this.ordersData);
  }

  putorders() {
    return this.objcHttp.put(this.ordersUrl + "/" + this.ordersData.OrderId, this.ordersData)
  }

  delorders(ordersId) {
    return this.objcHttp.delete(this.ordersUrl + "/" + ordersId);
  }
}
