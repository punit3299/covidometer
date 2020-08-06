import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statesearch'
})
export class StatesearchPipe implements PipeTransform {

  transform(usersList: any, searchText: any,): any {
    let newList: any;

    if (searchText) {
      newList = usersList.filter(user => user.state.toLowerCase().startsWith(searchText.toLowerCase()));
    }
    else {
      newList = usersList;
    }

    return newList;
  }
}
