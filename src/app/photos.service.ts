import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  photos = [
    'TestImages/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg',
    'TestImages/pexels-photo-59321.jpeg',
    'TestImages/pexels-photo-147640.jpeg',
    'TestImages/pexels-photo-212942.jpeg',
    'TestImages/pexels-photo-298246.jpeg',
    'TestImages/pexels-photo-955656.jpeg',
    'TestImages/pexels-photo-1043458.jpeg',
    'TestImages/pexels-photo-1732419.jpeg',
  ];

  getPhotos() {
    return this.photos;
  }

  getPhoto(index: number) {
    return this.photos[index];
  }

  constructor() {}
}
