import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  // readonly authUrl="http://localhost:55277/api/Auth/Login";

  // constructor(private http:HttpClient) { }

  // logIn(any){
  //   console.log(any);
  //   return this.http.post<any>(this.authUrl,any);
  // }

  // logOut(){
  //   localStorage.clear();
  //   localStorage.removeItem('token');
  // }

  // storeToken(tokenValue:string){
  //   localStorage.setItem('token',tokenValue);
  // }

  // getToken(){
  //   return localStorage.getItem('token');
  // }

  // isLogedIn(): boolean{
  //   return !!localStorage.getItem('token');
  // }


  constructor(private http:HttpClient, private router:Router) { }
  
  login(data:any):Observable<any>{
    return this.http.post('http://localhost:55277/api/Auth/Login',data);
  }

  

  private isTokenExpired(token: string) {
    if(token===null){
      return true;
    }
  const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
  console.log(expiry);
  return expiry * 1000 < Date.now();
}
  isAuthenticated():boolean{
    var token1 = localStorage.getItem("token")?localStorage.getItem("token"):null;
    if(this.isTokenExpired(token1))
      return false;
    return true;
  }

}
