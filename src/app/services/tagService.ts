import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TagView} from "../models/tagView";

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private TAG_SERVER = "http://localhost:8080/tags";

  constructor(private httpClient: HttpClient) { }

  public getTags(): Observable<TagView> {
    return this.httpClient.get<TagView>(this.TAG_SERVER);
  }

  public getTagNames(): Observable<string> {
    return this.httpClient.get<string>(this.TAG_SERVER + "/names");
  }
}
