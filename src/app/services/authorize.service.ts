import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  readonly authUrl="http://localhost:55277/api/Auth/Login";

  constructor(private http:HttpClient) { }

  logIn(any){
    console.log(any);
    return this.http.post<any>(this.authUrl,any);
  }

  logOut(){
    localStorage.clear();
    localStorage.removeItem('token');
  }

  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isLogedIn(): boolean{
    return !!localStorage.getItem('token');
  }
}
