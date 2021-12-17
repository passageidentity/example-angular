import { Component } from '@angular/core';
import { LayoutStyle } from 'src/components/layout/layout.component';
import '@passageidentity/passage-auth';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'home';

  public layoutStyle = LayoutStyle.Home;
}
