import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

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
  abrirShop(x) {
    this.nav.navigateForward(x);
  }

}
