import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  slidesOptions = {
    slidesPerView: 1
  };


  constructor(public nav: NavController) { }
  abrirLoja(x) {
    this.nav.navigateForward(x);
  }



  ngOnInit() {
  }

}
