import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  // Default photo example data. Hard baked for now.
  photos = [
    {
      id: 0,
      title: 'Bellingrath Gardens, Alabama',
      location: 'Bellingrath Gardens',
      uploadDate: '2020-01-01',
      photoDate: '2019-12-25',
      src: 'TestImages/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg',
      alt: 'Bellingrath Gardens, Alabama',
    },
    {
      id: 1,
      title: 'A beautiful landscape',
      location: 'Bellingrath Gardens',
      uploadDate: '2020-01-01',
      photoDate: '2019-12-25',
      src: 'TestImages/pexels-photo-59321.jpeg',
      alt: 'A beautiful landscape',
    },
    {
      id: 2,
      title: 'A beautiful landscape',
      location: 'Bellingrath Gardens',
      uploadDate: '2020-01-01',
      photoDate: '2019-12-25',
      src: 'TestImages/pexels-photo-147640.jpeg',
      alt: 'A beautiful landscape',
    },
    {
      id: 3,
      title: 'A beautiful landscape',
      location: 'Bellingrath Gardens',
      uploadDate: '2020-01-01',
      photoDate: '2019-12-25',
      src: 'TestImages/pexels-photo-212942.jpeg',
      alt: 'A beautiful landscape',
    },
    {
      id: 4,
      title: 'A beautiful landscape',
      location: 'Bellingrath Gardens',
      uploadDate: '2020-01-01',
      photoDate: '2019-12-25',
      src: 'TestImages/pexels-photo-298246.jpeg',
      alt: 'A beautiful landscape',
    },
    {
      id: 5,
      title: 'A beautiful landscape',
      location: 'Bellingrath Gardens',
      uploadDate: '2020-01-01',
      photoDate: '2019-12-25',
      src: 'TestImages/pexels-photo-955656.jpeg',
      alt: 'A beautiful landscape',
    },
    {
      id: 6,
      title: 'A beautiful landscape',
      location: 'Bellingrath Gardens',
      uploadDate: '2020-01-01',
      photoDate: '2019-12-25',
      src: 'TestImages/pexels-photo-1043458.jpeg',
      alt: 'A beautiful landscape',
    },
    {
      id: 7,
      title: 'A beautiful landscape',
      location: 'Bellingrath Gardens',
      uploadDate: '2020-01-01',
      photoDate: '2019-12-25',
      src: 'TestImages/pexels-photo-1732419.jpeg',
      alt: 'A beautiful landscape',
    },
    {
      id: 8,
      title: 'A beautiful landscape',
      location: 'Bellingrath Gardens',
      uploadDate: '2020-01-01',
      photoDate: '2019-12-25',
      src: 'TestImages/pexels-photo-59321.jpeg',
      alt: 'A beautiful landscape',
    },
    {
      id: 9,
      title: 'A beautiful landscape',
      location: 'Bellingrath Gardens',
      uploadDate: '2020-01-01',
      photoDate: '2019-12-25',
      src: 'TestImages/pexels-photo-147640.jpeg',
      alt: 'A beautiful landscape',
    },
    {
      id: 10,
      title: 'A beautiful landscape',
      location: 'Bellingrath Gardens',
      uploadDate: '2020-01-01',
      photoDate: '2019-12-25',
      src: 'TestImages/pexels-photo-212942.jpeg',
      alt: 'A beautiful landscape',
    },
    {
      id: 11,
      title: 'A beautiful landscape',
      location: 'Bellingrath Gardens',
      uploadDate: '2020-01-01',
      photoDate: '2019-12-25',
      src: 'TestImages/pexels-photo-298246.jpeg',
      alt: 'A beautiful landscape',
    },
    {
      id: 12,
      title: 'A beautiful landscape',
      location: 'Bellingrath Gardens',
      uploadDate: '2020-01-01',
      photoDate: '2019-12-25',
      src: 'TestImages/pexels-photo-955656.jpeg',
      alt: 'A beautiful landscape',
    },
    {
      id: 13,
      title: 'A beautiful landscape',
      location: 'Bellingrath Gardens',
      uploadDate: '2020-01-01',
      photoDate: '2019-12-25',
      src: 'TestImages/pexels-photo-1043458.jpeg',
      alt: 'A beautiful landscape',
    },
    {
      id: 14,
      title: 'A beautiful landscape',
      location: 'Bellingrath Gardens',
      uploadDate: '2020-01-01',
      photoDate: '2019-12-25',
      src: 'TestImages/pexels-photo-1732419.jpeg',
      alt: 'A beautiful landscape',
    },
    {
      id: 15,
      title: 'A beautiful landscape',
      location: 'Bellingrath Gardens',
      uploadDate: '2020-01-01',
      photoDate: '2019-12-25',
      src: 'TestImages/pexels-photo-59321.jpeg',
      alt: 'A beautiful landscape',
    },
    {
      id: 16,
      title: 'A beautiful landscape',
      location: 'Bellingrath Gardens',
      uploadDate: '2020-01-01',
      photoDate: '2019-12-25',
      src: 'TestImages/pexels-photo-147640.jpeg',
      alt: 'A beautiful landscape',
    },
    {
      id: 17,
      title: 'A beautiful landscape',
      location: 'Bellingrath Gardens',
      uploadDate: '2020-01-01',
      photoDate: '2019-12-25',
      src: 'TestImages/pexels-photo-212942.jpeg',
      alt: 'A beautiful landscape',
    },
    {
      id: 18,
      title: 'A beautiful landscape',
      location: 'Bellingrath Gardens',
      uploadDate: '2020-01-01',
      photoDate: '2019-12-25',
      src: 'TestImages/pexels-photo-298246.jpeg',
      alt: 'A beautiful landscape',
    },
    {
      id: 19,
      title: 'A beautiful landscape',
      location: 'Bellingrath Gardens',
      uploadDate: '2020-01-01',
      photoDate: '2019-12-25',
      src: 'TestImages/pexels-photo-955656.jpeg',
      alt: 'A beautiful landscape',
    },
    {
      id: 20,
      title: 'A beautiful landscape',
      location: 'Bellingrath Gardens',
      uploadDate: '2020-01-01',
      photoDate: '2019-12-25',
      src: 'TestImages/pexels-photo-1043458.jpeg',
      alt: 'A beautiful landscape',
    },
    {
      id: 21,
      title: 'A beautiful landscape',
      location: 'Bellingrath Gardens',
      uploadDate: '2020-01-01',
      photoDate: '2019-12-25',
      src: 'TestImages/pexels-photo-1732419.jpeg',
      alt: 'A beautiful landscape',
    },
  ];

  getPhotos() {
    return this.photos;
  }

  getPhotoByID(id: number) {
    return this.photos[id];
  }

  constructor() {}
}
