import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

   constructor(public alertController: AlertController,
               public nav: NavController) {}

  voltar(x) {
    this.nav.navigateBack(x);
  }


  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Qual pet(s) irá utilizar o serviço?',
      inputs: [
        // multiline input.
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Tchunay',
          value: 'value1',
          checked: false
        },
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Sebastião',
          value: 'value1',
          checked: false
        },
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Tinoco',
          value: 'value1',
          checked: false
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'confirmar',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }


  ngOnInit() {
  }

}

