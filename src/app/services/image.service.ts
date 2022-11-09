import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ImageView} from "../models/imageView";
import {ImagePreviewView} from "../models/imagePreviewView";
import {ImagePostView} from "../models/imagePostView";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
};

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private IMAGE_SERVER = "http://localhost:8080/images";



  constructor(private httpClient: HttpClient) {
  }

  public getImages(): Observable<ImagePreviewView> {
    return this.httpClient.get<ImagePreviewView>(this.IMAGE_SERVER,);
  }

  public getImage(id: number): Observable<ImageView> {
    return this.httpClient.get<ImageView>(this.IMAGE_SERVER + "/" + id);
  }


  public deleteImage(id: number) {
    return this.httpClient.delete(this.IMAGE_SERVER + "/" + id);
  }

  public searchWithAttributes(searchTerm: string, tagNames: string[]) {
    let params = {
      name: searchTerm,
      tagNames:tagNames,
    }
    return this.httpClient.get(this.IMAGE_SERVER + "/search", {params: params});
  }

  public postImage(file: File, imagePostView: ImagePostView) {

    console.log(imagePostView)
    let formData:FormData = new FormData();
    formData.append('file', file);
    formData.append('name', imagePostView.name);
    formData.append('description', imagePostView.description);
    formData.append('userId', imagePostView.userId.toString());
    imagePostView.tags.forEach((tag) => formData.append("tags", tag));


    return this.httpClient.post(this.IMAGE_SERVER, formData);

  }
}
