import {Component, OnInit} from '@angular/core';
import {ImageView} from "../models/imageView";
import {ImageService} from "../services/image.service";
import {ActivatedRoute} from "@angular/router";
import {StorageService} from "../services/storageService";

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {

  id: number;

  image: ImageView = {} as ImageView;

  private roles: string[] = [];
  isLoggedIn = false;
  isAdmin = false;

  constructor(private imageService: ImageService, private route: ActivatedRoute, private storageService: StorageService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.imageService.getImage(this.id).subscribe(image => {
      this.image = image;
    });


    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
      this.isAdmin = this.roles?.includes('ROLE_ADMIN');
    }
  }

  deleteImage() {
    this.imageService.deleteImage(this.id).subscribe({
      next: data => {},
      error: err => {
        console.log(err.error);
      }
    });
  }
}
