import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  signupView = false;

  constructor(public nav: NavController) { }
  voltar(x) {
    this.nav.navigateBack(x);
  }

  toggleSignUpView() {
    this.signupView = !this.signupView;
  }

}
