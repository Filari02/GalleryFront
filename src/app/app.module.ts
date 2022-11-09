import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from "@angular/common/http";
import {ImagePipe} from "./customPipes/ImagePipe";
import {ImageUploadComponent} from "./ImageUpload/imageUpload.component";
import {SearchPipe} from "./customPipes/SearchPipe";

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    ImageDetailComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    ImagePipe,
    ImageUploadComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
