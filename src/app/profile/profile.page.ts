import { Storage } from '@ionic/storage'
import { AfterContentChecked, AfterViewChecked, Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from '../apis/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  updatedUser: any;
  currentUser: any;
  password: string;
  editing: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private alertController: AlertController,
    private storage: Storage
  ) {
    this.updatedUser = this.formBuilder.group({
      name: '',
      email: '',
      phone_number: '',
      address: ''
    })
  }

  ngOnInit() {
    this.currentUser = this.route.snapshot.data['user']
  };

  startEditing() {
    this.editing = true;
    document.getElementById('alterButton').style.display = 'none'
    document.getElementById('confirmAndCancelButtons').style.display = 'block'
  };

  cancelUpdate() {
    this.editing = false;
    document.getElementById('alterButton').style.display = 'block'
    document.getElementById('confirmAndCancelButtons').style.display = 'none'
  };

  async presentAlert(alertObject: any) {
    const alert = await this.alertController.create(alertObject);
    await alert.present();
  };

  async presentConfirmationAlert(updatedUser: any) {
    await this.presentAlert({
      cssClass: 'my-custom-class',
      header: 'Digite sua senha para confirmar.',
      inputs: [{ type: 'password', name: 'password' }],
      buttons: [
        { text: 'Cancelar', role: 'cancel', cssClass: 'secondary', handler: () => { } },
        { text: 'Confirmar', handler: (data: any) => this.confirmUpdate(updatedUser, data.password) }
      ]
    })
  };

  confirmUpdate(updatedUser: any, password: string) {
    updatedUser.username = this.currentUser.username
    updatedUser.password = password
    Object.keys(updatedUser).forEach(key => {
      if(updatedUser[key] === '') {
        delete updatedUser[key]
      }
    })
    this.userService.updateUser(updatedUser).subscribe(
      async res => {
        await this.storage.set('userObject', res)
        await this.presentAlert({
          cssClass: 'my-custom-class',
          header: 'Dados atualizados com sucesso!',
          buttons: [
            {
              text: 'Ok',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => { }
            }
          ]
        })
        this.cancelUpdate()
        this.storage.get('userObject').then(data => this.currentUser = data)
      },
      async err => {
        let message: string;
        switch (err.error.extra) {
          case 'Invalid email address!':
            message = 'E-mail inválido.'
            break;
          case 'Incorrect username or password.':
            message = 'Senha incorreta.'
            break
          default:
            message = 'Erro inesperado, tente novamente.'
            break;
        }
        await this.presentAlert({
          cssClass: 'my-custom-class',
          header: 'Erro ao atualizar dados.',
          message: message,
          buttons: [
            {
              text: 'Ok',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => { }
            }
          ]
        })
      }
    )
  };

}
