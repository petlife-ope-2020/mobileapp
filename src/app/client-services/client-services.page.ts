import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-services',
  templateUrl: 'client-services.page.html',
  styleUrls: ['client-services.page.scss']
})
export class ClientServicesPage implements OnInit {
  agendado = [
    {
      servico: 'Tosa',
      data: '24/12/2020'
    },
    {
      servico: 'Banho',
      data: '22/12/2020'
    },
    {
      servico: 'Vacina',
      data: '20/12/2020'
    },
  ];

  historico = [
    {
      servico: 'Tosa',
      data: '02/06/2020'
    },
    {
      servico: 'Banho',
      data: '08/07/2020'
    },
    {
      servico: 'Vacina',
      data: '11/08/2020'
    },
  ];

  constructor(public nav: NavController,
    public alertController: AlertController) { }
  abrirPagina() {
    this.nav.navigateForward('login');
  }


  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Qual serviço gostaria de cancelar?',
      inputs: [
        // multiline input.
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Tosa, data: 24/12/2020',
          value: 'value1',
          checked: false
        },
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Banho, data: 22/12/2020',
          value: 'value1',
          checked: false
        },
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Vacina, data: 20/12/2020',
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
            console.log('Cancela confirmação');
          }
        }, {
          text: 'confirmar',
          handler: () => {
            console.log('Confirmado cancelamento');
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
