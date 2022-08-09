import { Component, OnInit, Input } from '@angular/core';
import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'dashboard';

  public username: String | undefined = '';
  public isLoading: Boolean = false;
  public isAuthorized: Boolean = false;

  constructor(private authService: AuthService){}

  ngOnInit(){
    this.isLoading = true;
    this.authService.isLoggedIn().then((result) => {
      if (result) {
        this.isLoading = this.authService.isLoading;
        this.isAuthorized = this.authService.isAuthenticated;
        this.username = this.authService.username;
      } else {
        this.isLoading = false;
        this.isAuthorized = false;
        this.username = '';
      }
    })
}
}
