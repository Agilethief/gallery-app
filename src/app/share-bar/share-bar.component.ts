import { Component, Input } from '@angular/core';
import { PhotoData } from '../photo.params.model';

@Component({
  selector: 'app-share-bar',
  standalone: true,
  imports: [],
  templateUrl: './share-bar.component.html',
  styleUrl: './share-bar.component.css',
})
export class ShareBarComponent {
  @Input() photoData!: PhotoData;

  onShareClick(shareType: string) {
    console.log(`Sharing ${this.photoData.title} on ${shareType}`);
  }
  onReportClick() {
    console.log(`Reporting ${this.photoData.title}`);
  }
  onQRClick() {
    console.log(`Generating QR code for ${this.photoData.title}`);
  }
}
