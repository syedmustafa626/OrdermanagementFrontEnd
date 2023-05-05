import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../models/products';

@Pipe({
  name: 'productfilter'
})
export class ProductfilterPipe implements PipeTransform {

  transform(value: Products[],CategoryId:string): Products[] {
    const Result = [];
    if(value.length===0||CategoryId===""){
      return value;
    }
    for(const item of value){
      if(item.CategoryId===CategoryId){
        Result.push(item)
      }
    }
    return Result;
  }

}
