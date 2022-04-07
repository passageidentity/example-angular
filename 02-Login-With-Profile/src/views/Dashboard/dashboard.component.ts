import { Component, OnInit } from '@angular/core';
import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'dashboard';

  public isLoading: Boolean = false;
  public isAuthorized: Boolean = false;
  public appId: string = environment.passageAppId;

  ngOnInit(){
    this.isLoading = true;
    new PassageUser().userInfo().then(userInfo=> {
        if(userInfo === undefined){
            this.isLoading = false;
            this.isAuthorized = false;
            return;
        }
        this.isLoading = false;
        this.isAuthorized =true;
    })
  }
}
