import { Component, Input } from '@angular/core';
import { LayoutStyle } from '../layout/layout.component';

@Component({
  selector: 'authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.css']
})
export class AuthorizedComponent {
  title = 'authorized';

  @Input('username') username: String = '';

  public layoutStyle = LayoutStyle.Authorized;
}
