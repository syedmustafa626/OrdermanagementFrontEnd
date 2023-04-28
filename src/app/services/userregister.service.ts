import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Userregister } from '../models/userregister.model';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {

  registerUrl = "http://localhost:55277/api/Users";

  constructor(public objcHttp:HttpClient) { }

  registerList: Userregister[];
  registerData: Userregister=new Userregister();
  role:string="";


  getregister() { 
    this.objcHttp.get(this.registerUrl).toPromise().then(res => this.registerList = res as Userregister[])
  }

  postregister() {
    this.registerData.Roles.push(this.role);
    console.log(this.registerData)
    return this.objcHttp.post(this.registerUrl, this.registerData);
  }

  putregister() {
    return this.objcHttp.put(this.registerUrl + "/" + this.registerData.UserId, this.registerData)
  }

  delregister(UserId) {
    return this.objcHttp.delete(this.registerUrl + "/" + UserId);
  }
}
