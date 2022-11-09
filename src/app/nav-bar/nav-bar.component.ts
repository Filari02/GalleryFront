import {Component, OnInit, SimpleChanges} from '@angular/core';
import {StorageService} from "../services/storageService";
import {AuthService} from "../services/authService";
import {BehaviorSubject} from "rxjs";
import {ImageService} from "../services/image.service";
import {TagView} from "../models/tagView";
import {TagService} from "../services/tagService";
import {ImagePreviewView} from "../models/imagePreviewView";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isLoggedIn : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  tags: TagView[];
  images: ImagePreviewView[];

  constructor(private storageService: StorageService, private authService: AuthService, private imageService: ImageService, private tagService: TagService) {
  }

  ngOnInit(): void {
    this.isLoggedIn.next(this.storageService.isLoggedIn());
    this.tagService.getTags().subscribe((tags:any) => {
      this.tags = tags;
    })
    }

  logout() {
    this.authService.logout().subscribe({
      next:()  => {
        this.storageService.clean();
        this.isLoggedIn.next(false);
      },
      error: err => {
        console.log(err);
      }
    });
  }



}
