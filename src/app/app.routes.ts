import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotoInspectComponent } from './photo-inspect/photo-inspect.component';

export const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
    title: 'Home',
  },
  {
    path: 'gallery/:id',
    component: PhotoInspectComponent,
    title: 'Gallery',
  },
  {
    path: 'photo/:id',
    component: PhotoInspectComponent,
    title: 'Inspect',
  },
  { path: '**', redirectTo: '' },
];
