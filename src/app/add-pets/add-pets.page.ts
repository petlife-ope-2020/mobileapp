import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.page.html',
  styleUrls: ['./add-pets.page.scss'],
})
export class AddPetsPage implements OnInit {

  constructor(public nav: NavController) { }

  voltar(x) {
    this.nav.navigateBack(x);
  }

  ngOnInit() {
  }

}
