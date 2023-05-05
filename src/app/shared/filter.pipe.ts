import { Pipe, PipeTransform } from '@angular/core';
import { Userregister } from '../models/userregister.model';
import{Orders}from '../models/orders';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Orders[],UserId:any): Orders[] {
    const Result = [];
    if(value.length===0||UserId===''){
      return value;
    }
    for(const item of value){
      if(item.UserId===UserId){
        Result.push(item)
      }
    }
    return Result;
  }

}
