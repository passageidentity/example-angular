import { Component, OnInit } from '@angular/core';
import axios from 'axios';

const API_URL = "http://localhost:7001";

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
    const authToken = localStorage.getItem("psg_auth_token");
    axios
      .post(`${API_URL}/auth`, null, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        const { authStatus, identifier } = response.data;
        if (authStatus === "success") {
          this.isLoading = false;
          this.isAuthorized = true;
          this.username = identifier;
        } else {
          this.isLoading = false;
          this.isAuthorized = false;
          this.username = '';
        }
      })
      .catch((err) => {
        console.log(err);
        this.isLoading = false;
        this.isAuthorized = false;
        this.username = '';
      });
  }
}
