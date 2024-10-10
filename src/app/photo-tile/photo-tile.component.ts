import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PhotoData } from '../photo.params.model';
// Represents a single photo in the gallery
// Will be the smaller thumbnail version
// Can click on to get a larger view

@Component({
  selector: 'app-photo-tile',
  standalone: true,
  imports: [],
  templateUrl: './photo-tile.component.html',
  styleUrl: './photo-tile.component.css',
})
export class PhotoTileComponent {
  @Input() photoData!: PhotoData;
  @Output() photoClick = new EventEmitter<PhotoData>();

  onButtonClick(buttonId: number) {
    console.log(`Photo ${buttonId} clicked! for ${this.photoData.title}`);
    this.photoClick.emit(this.photoData);
  }
}
