import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { UserService } from '../apis/user.service';
import { FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.page.html',
  styleUrls: ['./add-pets.page.scss'],
})
export class AddPetsPage implements OnInit {

  addPetForm: any;

  constructor(
    public nav: NavController,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private storage: Storage,
    public alertController: AlertController,
  ) {
    this.addPetForm = this.formBuilder.group({
      name: '',
      species: '',
      breed: '',
      age_years: '',
      weight_kilos: ''
    })
  }

  ngOnInit() {
  }

  goBack() {
    window.history.back()
  }

  addPet(newPet: object) {
    let username: string,
      password: string,
      pets = JSON.stringify(newPet);

    this.storage.get('userObject').then(user => {
      username = user.username
    });
    this.storage.get('password').then(pw => {
      password = pw
    });

    this.userService.updateUser({
      username,
      password,
      pets
    }).subscribe(

      res => {
        let pet_name = newPet['name']
        this.presentAlert({
          header: 'Pet adicionado com sucesso!',
          subHeader: `${pet_name} foi adicionado aos seus pets.`,
          message: '',
          buttons: ['OK']
        });
      },

      err => {
        this.presentAlert({
          header: 'Problema ao adicionar pet!',
          subHeader: '',
          message: '',
          buttons: ['OK']
        });
      }
    );
  };

  async presentAlert(alertObject: any) {
    const alert = await this.alertController.create(alertObject);
    await alert.present();
  }

}
