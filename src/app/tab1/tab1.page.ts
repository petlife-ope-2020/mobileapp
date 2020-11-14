import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  slidesOptions = {
    slidesPerView: 1,
  };

  public teste: string[] = [];
  public testeFilter: string[] = this.teste;


  ngOnInit() {
  }

  public pesquisar(ev: CustomEvent) {
    const val = ev.detail.value;
    if (val && val.trim() !== '') {
      this.testeFilter = this.teste.filter(term =>
        term.indexOf(val) > -1);
    }
    else {
      this.testeFilter = this.teste;
    }
  }


  constructor(public nav: NavController) { }
  abrirLoja(x) {
    this.nav.navigateForward(x);
  }

}
