import { Component, inject, ElementRef, ViewChild, Input } from '@angular/core';
import { PhotosService } from '../photos.service';
import { PhotoTileComponent } from '../photo-tile/photo-tile.component';
import { PhotoData } from '../photo.params.model';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ShareBarComponent } from '../share-bar/share-bar.component';

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
  private modalService = inject(NgbModal);

  @ViewChild('imageModal') imageModal!: ElementRef<HTMLDivElement>;

  constructor() {
    this.photos = this.photosService.getPhotos();
  }

  showImageModal(photo: PhotoData) {
    // Show the image modal
    const modalRef = this.modalService.open(NgbdModalContent, {
      size: 'lg', // Use 'lg' or 'xl' for predefined sizes
      //windowClass: 'custom-modal', // Apply custom class if needed
    });
    modalRef.componentInstance.photoData = photo;
  }
}

@Component({
  selector: 'ngbd-modal-content',
  standalone: true,
  imports: [ShareBarComponent],
  templateUrl: './gallery.modal.html',
})
export class NgbdModalContent {
  activeModal = inject(NgbActiveModal);

  @Input() photoData!: PhotoData;
}
