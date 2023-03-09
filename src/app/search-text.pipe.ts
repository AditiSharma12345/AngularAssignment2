import { Pipe, PipeTransform } from '@angular/core';
import { product,productSearch } from 'src/app/data-types';

@Pipe({
  name: 'searchText'
})
export class SearchTextPipe implements PipeTransform {
  Result:undefined | productSearch[];
  transform(value: any, args?:any): any {
    if(!value) return null;
    if(!args) return value;

    args = args.toLowerCase();

    return value.filter((item :any)=>{
      return JSON.stringify(item).toLowerCase().includes(args);
    })

  }

}
