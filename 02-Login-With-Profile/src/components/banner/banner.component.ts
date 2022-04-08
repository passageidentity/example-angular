import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent {
  title = 'banner';

  constructor(private router: Router) { }
}
