import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage'
import { OrdersService } from '../apis/orders.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  shop: any;

  constructor(
    public alertController: AlertController,
    public nav: NavController,
    private storage: Storage,
    private orderService: OrdersService
  ) { }

  ngOnInit() {
    this.shop = window.history.state
  };

  doBack() {
    window.history.back();
  };

  async startOrderPlacement(chosenService: any){
    if(! await this.storage.get('isLoggedIn')){
      this.nav.navigateRoot('login')
    } else {
      await this.presentOrderPlacementPrompt(chosenService)
    }
  };

  async presentOrderPlacementPrompt(chosenService: any) {
    const pets = await this.getUserPets(),
      alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Para qual pet será o serviço?',
        inputs: pets.map((pet: any) => { return { label: pet.name, type: 'radio', value: pet } }),
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => { }
          },
          {
            text: 'Confirmar',
            handler: (chosenPet: object) => {
              this.presentSchedulePrompt(chosenService, chosenPet)
            }
          }
        ]
      });
    await alert.present();
  };

  async presentSchedulePrompt(chosenService, chosenPet) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Quando?',
      inputs: [{ type: 'datetime-local', value: 'chosenTime' }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => { }
        }, {
          text: 'Confirmar',
          handler: (chosenTime: any) => {
            this.placeOrder(chosenPet, chosenService, chosenTime[0])
          }
        }
      ]
    });
    await alert.present();
  };

  async getUserPets(): Promise<object[]> {
    const user: object = await this.storage.get('userObject');
    return user['pets']
  };

  async placeOrder(pet: any, service: any, time) {
    const user = await this.storage.get('userObject')
    this.orderService.placeOrder({
      petshop_username: this.shop.username,
      petshop_name: this.shop.name,
      service_id: service.service_id,
      service_name: service.service_name,
      client_username: user.username,
      client_name: user.name,
      client_pet: JSON.stringify(pet),
      schedule_datetime: time
    }).subscribe(

      async res => {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Pedido enviado com sucesso!',
          buttons: [{ text: 'Ok!', handler: () => { } }]
        })
        await alert.present()
      },

      async err => {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Erro ao agendar! Tente novamente.',
          buttons: [{ text: 'Ok!', handler: () => { } }]
        })
        await alert.present()
      })
  };

}
