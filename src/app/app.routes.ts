import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotoInspectComponent } from './photo-inspect/photo-inspect.component';
import { PrivacyComponent } from './privacy/privacy.component';

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
    path: 'privacy',
    component: PrivacyComponent,
    title: 'Privacy',
  },
  {
    path: 'photo/:id',
    component: PhotoInspectComponent,
    title: 'Inspect',
  },
  { path: '**', redirectTo: '' },
];
