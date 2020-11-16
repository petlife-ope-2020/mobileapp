import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopPageRoutingModule } from './shop-routing.module';

import { ShopPage } from './shop.page';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopPageRoutingModule
  ],
  declarations: [
    ShopPage,
    SearchbarComponent
  ]
})
export class ShopPageModule { }
