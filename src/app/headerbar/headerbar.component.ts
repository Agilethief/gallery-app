import { Component } from '@angular/core';
import { siteValues } from '../site-values';

// The nav bar at the top of the page

@Component({
  selector: 'app-headerbar',
  standalone: true,
  imports: [],
  templateUrl: './headerbar.component.html',
  styleUrl: './headerbar.component.css',
})
export class HeaderbarComponent {
  siteValues = siteValues;
}
