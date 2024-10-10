import { Component, inject, ElementRef, ViewChild } from '@angular/core';
import { PhotosService } from '../photos.service';
import { PhotoTileComponent } from '../photo-tile/photo-tile.component';
import { PhotoData } from '../photo.params.model';
// This component will provide a list of images that belong to the specified gallery

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [PhotoTileComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  photos: PhotoData[] = [];
  photosService = inject(PhotosService);

  @ViewChild('imageModal') imageModal!: ElementRef<HTMLDivElement>;

  constructor() {
    this.photos = this.photosService.getPhotos();
  }

  showImageModal(photo: PhotoData) {
    // Show the image modal
    this.imageModal.nativeElement.style.display = 'block';
  }
}
