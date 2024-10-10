import { Component, inject, ElementRef, ViewChild, Input } from '@angular/core';
import { PhotosService } from '../photos.service';
import { PhotoTileComponent } from '../photo-tile/photo-tile.component';
import { PhotoData } from '../photo.params.model';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{ photoData.title }}</h4>
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      ></button>
    </div>
    <div class="modal-body px-0">
      <div class="ratio ratio-1x1 rounded-sm">
        <img
          src="{{ photoData.src }}"
          alt="{{ photoData.alt }}"
          class="img-fluid rounded-sm"
          style="object-fit: cover;"
        />
      </div>
    </div>
  `,
})
export class NgbdModalContent {
  activeModal = inject(NgbActiveModal);

  @Input() photoData!: PhotoData;
}
