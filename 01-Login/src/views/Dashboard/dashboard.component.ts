import { Component, OnInit, Input } from '@angular/core';
import { PassageUser } from '@passageidentity/passage-elements/passage-user';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'dashboard';

  public username: String = '';
  public isLoading: Boolean = false;
  public isAuthorized: Boolean = false;

  ngOnInit(){
    this.isLoading = true;
    new PassageUser().userInfo().then(userInfo=> {
        if(userInfo === undefined){
            this.isLoading = false;
            this.isAuthorized = false;
            this.username = "";
            return;
        }
        this.isLoading = false;
        this.isAuthorized =true;
        this.username = userInfo.email ? userInfo.email : userInfo.phone;
    })
  }
}
