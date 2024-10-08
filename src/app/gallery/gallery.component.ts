import { Component, inject } from '@angular/core';
import { PhotosService } from '../photos.service';

// This component will provide a list of images that belong to the specified gallery

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  photos: string[] = [];
  photosService = inject(PhotosService);

  constructor() {
    this.photos = this.photosService.getPhotos();
  }
}
