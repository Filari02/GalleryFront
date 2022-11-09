import { Component, OnInit } from '@angular/core';
import {UserLoginView} from "../models/userLoginView";
import {AuthService} from "../services/authService";
import {StorageService} from "../services/storageService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {
    email: null,
    password: null,
  };
  roles: string[] = [];

  errorMessage = '';
  isLoggedIn = false;

  routerLink = "/images";

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let user: UserLoginView = {
      email: this.form.email,
      password: this.form.password
    }

    this.authService.login(user).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.moveToHome();
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }

  moveToHome(): void {
    window.location.href=this.routerLink;
  }
}
