import { Component, Input } from '@angular/core';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  title = 'layout';

  @Input('authorized') authorized: boolean = false;
  @Input('layoutStyle') layoutStyle: LayoutStyle = LayoutStyle.Home;
}

export enum LayoutStyle {
  Home = "home",
  Authorized = "authorized",
  Unauthorized = "unauthorized",
}
