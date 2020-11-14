import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientServicesPage } from './client-services.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ClientServicesPageRoutingModule } from './client-services-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ClientServicesPage }]),
    ClientServicesPageRoutingModule,
  ],
  declarations: [ClientServicesPage]
})
export class ClientServicesPageModule {}
