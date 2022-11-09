import {Component, OnInit} from "@angular/core";
import {ImageService} from "../services/image.service";
import {TagService} from "../services/tagService";
import {ImagePostView} from "../models/imagePostView";
import {StorageService} from "../services/storageService";

@Component({
  selector: 'app-ImageUpload',
  templateUrl: './imageUpload.component.html',
  styleUrls: ['./imageUpload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  form: any = {
    name: null,
    description: null,
  };

  tags: string[] = [];
  selectedTags: string[] = [];
  newTag: string;

  imageSrc: string;
  file: File;

  constructor(private tagService: TagService, private imageService: ImageService, private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.tagService.getTagNames().subscribe((tags:any) => {
      this.tags = tags.sort();
    })
  }

  onFileChange(event) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
    }
  }

  submit() {
    let imagePostView: ImagePostView = {
      name: this.form.name,
      description: this.form.description,
      tags: this.selectedTags,
      userId: this.storageService.getUser().id,
    };

    this.imageService.postImage(this.file, imagePostView).subscribe({
      next: data => {},
      error: err => {
        console.log(err.error);
      }
    });
  }

  addTag(){
    if (this.newTag == null) {
      return;
    }
    let name = this.newTag[0].toLocaleUpperCase() + this.newTag.substr(1).toLocaleUpperCase();
    this.tags.push(name);
  }

  onCheck(tag) {
    if (!this.selectedTags.includes(tag)) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);
    }
  }

}
