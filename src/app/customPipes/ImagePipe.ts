import {Pipe, PipeTransform} from "@angular/core";
import {DomSanitizer, SafeResourceUrl, SafeUrl} from "@angular/platform-browser";
import {map, Observable, pipe, take} from "rxjs";

@Pipe({name: 'ImagePipe'})
export class ImagePipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {
  }

  transform(array: Uint8Array, type: string) {
    if (array != undefined) {
      let urlCreator = window.URL || window.webkitURL;
      let url = this.domSanitizer.bypassSecurityTrustResourceUrl(urlCreator.createObjectURL(this.base64ToBlob(array, type)));
      console.log(url)
      return url;
    }
    else {
      return "";
    }
  }

  base64ToBlob(base64: Uint8Array, type: string) {
    const byteCharacters = window.atob(base64?.toString());
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], {type: "image/" + type});
  }

}
