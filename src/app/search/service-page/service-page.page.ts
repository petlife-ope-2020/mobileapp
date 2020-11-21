import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.page.html',
  styleUrls: ['./service-page.page.scss'],
})
export class ServicePagePage implements OnInit {

  currentService: object;

  constructor(
    public nav: NavController,
    private route: ActivatedRoute,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.currentService = this.route.snapshot.data['service']
  };

  goBack() {
    window.history.back()
  };

  async openShop(shopUsername: string) {
    this.storage.get('shops').then(
      (shopsList: Array<any>) => {
        shopsList.forEach(shop => {
          if (shop.username === shopUsername) {
            this.nav.navigateForward('shop', { state: shop });
          }
        })
      }
    )
  };

}
