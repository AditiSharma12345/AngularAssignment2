 import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<number>, args?: number): any {
    return value.sort((a,b)=>{
      
      if(a<b)
      {
        return -1;
      }else{
        return 1;
      }
      return 0;
    });
  }

}
