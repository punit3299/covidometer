import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'districtsearch'
})
export class DistrictsearchPipe implements PipeTransform {

  
  transform(usersList: any, searchText: any,): any {
    let newList: any;

    if (searchText) {
      newList = usersList.filter(user => user.district.toLowerCase().startsWith(searchText.toLowerCase()));
    }
    else {
      newList = usersList;
    }

    return newList;
  }

}
