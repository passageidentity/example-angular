import { Component } from '@angular/core';
import { LayoutStyle } from '../layout/layout.component';

@Component({
  selector: 'unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent {
  title = 'unauthorized';

  public layoutStyle = LayoutStyle.Unauthorized;
}
