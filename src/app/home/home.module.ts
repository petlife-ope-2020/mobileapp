import { IonicModule, IonSearchbar } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SearchbarComponent } from '../search/searchbar/searchbar.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    SearchbarComponent
  ],
  providers: [
    IonSearchbar
  ]
})
export class HomePageModule { }
