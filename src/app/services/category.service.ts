import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  readonly categoryUrl = "http://localhost:55277/api/categories";

  constructor(public objcHttp:HttpClient) { }

  categoryList: Category[];
  categoryData: Category=new Category();

  getCategory() { 
    this.objcHttp.get(this.categoryUrl).toPromise().then(res => this.categoryList = res as Category[])
  }

  postCategory() {
    return this.objcHttp.post(this.categoryUrl, this.categoryData);
  }

  putCategory() {
    return this.objcHttp.put(this.categoryUrl + "/" + this.categoryData.CategoryId, this.categoryData)
  }

  delCategory(CategoryId) {
    return this.objcHttp.delete(this.categoryUrl + "/" + CategoryId);
  }
}
