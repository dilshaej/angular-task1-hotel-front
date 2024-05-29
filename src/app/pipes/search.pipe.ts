import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allHotels:any[],searchTerm:string): any[] {
    const result:any = []
    if(!allHotels || !searchTerm){
      return allHotels
    }
    allHotels.forEach((item:any)=>{
    if(item['city'].toLowerCase().includes(searchTerm.toLowerCase()))  {
      result.push(item)
    }
    })
    return result;
  }

}
