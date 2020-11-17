import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { UserService } from '../apis/user.service';
import { HttpResponse } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  registrationForm: any;
  signupView = false;

  constructor(
    public nav: NavController,
    public alertController: AlertController,
    private userService: UserService,
    private storage: Storage,
    private formBuilder: FormBuilder
  ) {
    this.registrationForm = this.formBuilder.group({
      name: '',
      username: '',
      email: '',
      password: '',
      phone_number: '',
      address: ''
    });
  }

  doLogin(username: string, password: string) {
    this.userService.authenticate(username, password).subscribe(
      (res: HttpResponse<any>) => {
        this.storage.set('isLoggedIn', true);
        this.storage.set('userObject', res);
        this.nav.navigateForward('tabs/home')
      },
      (err: any) => {
        this.presentAlert({
          header: 'Login Inválido!',
          subHeader: '',
          message: 'Usuário ou senha incorretos.',
          buttons: ['OK']
        });
      });
  };

  async presentAlert(alertObject: any) {
    const alert = await this.alertController.create(alertObject);
    await alert.present();
  }

  doBack() {
    this.nav.navigateBack('tabs/home');
  };

  toggleSignUpView() {
    this.signupView = !this.signupView;
  };

  doSignup(newUser) {
    this.userService.registerUser(newUser).subscribe(
      (res: HttpResponse<any>) => {
        this.presentAlert({
          header: 'Sucesso!',
          subHeader: '',
          message: 'Novo usuário cadastrado.',
          buttons: ['OK']
        });
      },
      (err: any) => {
        console.log(err)
        this.presentAlert({
          header: 'Problemas ao cadastrar!',
          subHeader: '',
          message: err,
          buttons: ['OK']
        });
      }
    );
  }
}
