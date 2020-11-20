import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../apis/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  slidesOptions = { slidesPerView: 1 };
  shopsList: Array<object>;

  constructor(
    public nav: NavController,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getAllShops();
  };

  getAllShops() {
    this.userService.getAllShops().subscribe(
      res => this.shopsList = res
      ,
      err => console.error(err)
    )
  };

  openShop(shopObject: object) {
    this.nav.navigateForward('shop', {state: shopObject}); 
  };

}
