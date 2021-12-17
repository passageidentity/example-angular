import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  title = 'banner';

  @Input('authorized') authorized: boolean = false;

  constructor(private router: Router) { }

  public logout(){
    document.cookie = "psg_auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.removeItem("psg_auth_token");
    this.router.navigate(['/'])
  }
}
