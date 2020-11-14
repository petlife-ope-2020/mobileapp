import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PetsPage } from './pets.page';

import { PetsPageRoutingModule } from './pets-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PetsPageRoutingModule
  ],
  declarations: [PetsPage]
})
export class PetsPageModule {}
