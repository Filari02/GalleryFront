import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: "SearchPipe"})
export class SearchPipe implements PipeTransform {
  transform(list: any[], filterText: string): any {
    return list ? list.filter(item => item.name.search(new RegExp(filterText, 'gi')) > -1) : [];
  }

}
