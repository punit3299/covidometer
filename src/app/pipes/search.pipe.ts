import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(usersList: any, searchText:any,currentState:any): any {
    let newList: any;

    if(searchText){
      newList = usersList.filter(user=>user.state==currentState).filter(user=> user.district.toLowerCase()
        .startsWith(searchText.toLowerCase()));
    }
    else{
      newList = usersList;
    }

    return newList;
  }

}
