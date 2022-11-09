import {Component, OnInit} from '@angular/core';
import {ImagePreviewView} from "../models/imagePreviewView";
import {ImageService} from "../services/image.service";
import {TagService} from "../services/tagService";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  images: ImagePreviewView[] = [];
  tags: string[] = [];

  searchTerm: string = "";
  selectedTags: string[] = [];

  constructor(private imageService: ImageService, private tagService: TagService) { }

  ngOnInit(): void {
   this.imageService.getImages().subscribe((images: any) => {
     this.images = images;
   });

   this.tagService.getTagNames().subscribe((tags:any) => {
     this.tags = tags.sort();
   })
  }

  onSubmit() {
      this.imageService.searchWithAttributes(this.searchTerm, this.selectedTags).subscribe((images: any) => {
        this.images = images;
    })
  }

  onCheck(tag) {
    if (!this.selectedTags.includes(tag)) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);
    }
  }
}
