import { Component, OnInit } from '@angular/core';
import { PassageUser } from '@passageidentity/passage-auth/passage-user'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'dashboard';

  public isLoading = false;
  public isAuthorized = false;
  public username = '';

  ngOnInit(){
    this.isLoading = true;
    new PassageUser().userInfo().then(userInfo =>{
      if(userInfo === undefined){
        this.isLoading = false;
        return;
      }
      this.isAuthorized = true;
      this.username = userInfo.email ? userInfo.email : userInfo.phone;
      this.isLoading = false;
    })
  }
}
