import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, q?: any) {

    if(!value)
    {
      return null;
    }
    if(!q)
    {
      return value;
    }
    q=q.toLowerCase();
    return value.filter(function(item:any){
      return (JSON.stringify(item.name).toLowerCase().includes(q) || JSON.stringify(item.heading).toLowerCase().includes(q) || 
      JSON.stringify(item.subHeading).toLowerCase().includes(q));
    })
  }
}



