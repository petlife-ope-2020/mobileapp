import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pets',
  templateUrl: 'pets.page.html',
  styleUrls: ['pets.page.scss']
})
export class PetsPage implements OnInit  {
  personas = [
    {
      nome : 'Tchunay',
      idade : '2 anos',
      raca : 'Desconhecido',
      url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQV5JhP9XMiXXUoYehQBZZkdz-OXBkBPx0UZQ&usqp=CAU'
    },
    {
      nome : 'Sebastião',
      idade : '3 anos',
      raca : 'Desconhecido',
      url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcAsTuwn07pci-ib_g6Yz8uqacuX9BXMftHw&usqp=CAU'
    },
    {
      nome : 'Tinoco',
      idade : '1 ano',
      raca : 'Desconhecido',
      url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfS-o_Z2Ya72NuGxNNOxaSTwqMzaTVyaSFSg&usqp=CAU'
    },
  ];

  constructor(public nav: NavController) {}

  slidesOptions = {
    slidesPerView: 1,
  };

  avancar(x) {
    this.nav.navigateForward(x);
  }

  ngOnInit() {
  }

}
