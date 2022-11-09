import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { ImagesComponent } from "./images/images.component";
import {ImageDetailComponent} from "./image-detail/image-detail.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ImageUploadComponent} from "./ImageUpload/imageUpload.component";

const routes: Routes = [
  {path: 'images', component: ImagesComponent},
  {path: 'images/:id', component: ImageDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'upload', component: ImageUploadComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
