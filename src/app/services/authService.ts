import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {UserRegisterView} from "../models/userRegisterView";
import {UserLoginView} from "../models/userLoginView";
import {UserInfo} from "../models/userInfo";

const AUTH_API = 'http://localhost:8080/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(user: UserLoginView): Observable<any> {
    return this.http.post<UserInfo>(AUTH_API + 'login', JSON.stringify(user), httpOptions);
  }

  register(user: UserRegisterView): Observable<any> {
    return this.http.post(AUTH_API + 'register', JSON.stringify(user), httpOptions);
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'logout', { }, httpOptions);
  }
}
