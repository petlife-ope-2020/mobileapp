import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  signupView = false;

  constructor() {}

  toggleSignUpView() {
    this.signupView = !this.signupView;
  }

}
