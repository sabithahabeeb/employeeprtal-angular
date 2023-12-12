import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allUSer: any[], searchKey: string): any[] {
    const result: any = []
    if (!allUSer || searchKey == "") {
      return allUSer
    }
    allUSer.forEach((item: any) => {
      if (item.name.trim().toLowerCase().includes(searchKey.trim().toLowerCase())) {
        result.push(item)
      }
    })
    return result;
  }

}
