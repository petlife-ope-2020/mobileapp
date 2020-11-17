import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-pets',
  templateUrl: 'pets.page.html',
  styleUrls: ['pets.page.scss']
})
export class PetsPage implements OnInit {
  pets = [];

  slidesOptions = {
    slidesPerView: 1.5,
  };

  constructor(public nav: NavController, private storage: Storage) { }

  ngOnInit() {
    this.getUserPets();
  };

  goToAddPet() {
    this.nav.navigateForward('add-pets');
  };

  getUserPets() {
    this.storage.get('userObject').then(user => {
      this.pets = user.pets
    })
  }

}
