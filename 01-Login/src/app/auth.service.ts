import { Injectable } from '@angular/core';
import { PassageUser, PassageUserInfo } from '@passageidentity/passage-elements/passage-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  isAuthenticated: boolean = false;
  public username: string | undefined = '';
  public isLoading: boolean = true;
  constructor() {

}

  public async isLoggedIn(): Promise<boolean> {
    this.isLoading = true;
    return await new PassageUser().userInfo().then(userInfo => {
       if (userInfo !== undefined) {
        this.isLoading = false;
        this.isAuthenticated = true;
        this.username = userInfo.email ? userInfo.email : userInfo.phone;
       } else {
        this.isLoading = false;
        this.isAuthenticated = false;
        this.username = '';
       }
       return this.isAuthenticated;

  })
}

}