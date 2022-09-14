import { Component, OnInit } from '@angular/core';
import {Image} from "../models/image";

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {

  image: Image = { id: 12, name: 'Test' };

  constructor() { }


  ngOnInit(): void {  }

}
