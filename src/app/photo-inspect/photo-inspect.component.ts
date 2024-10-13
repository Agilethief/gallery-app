import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoData } from '../photo.params.model';
import { PhotosService } from '../photos.service';
import { ShareBarComponent } from '../share-bar/share-bar.component';

// The zoomed in view of a photo, with share icons, QR code generation etc.
// Should display the full image
// Is its own PAGE, not a modal

@Component({
  selector: 'app-photo-inspect',
  standalone: true,
  imports: [ShareBarComponent],
  templateUrl: './photo-inspect.component.html',
  styleUrl: './photo-inspect.component.css',
})
export class PhotoInspectComponent implements OnInit {
  photoID!: number;
  photoData!: PhotoData;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotosService
  ) {}

  ngOnInit(): void {
    // Get id
    this.route.paramMap.subscribe((params) => {
      this.photoID = Number(params.get('id'));
      this.photoData = this.photoService.getPhotoByID(this.photoID);
    });
  }
}
