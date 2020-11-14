import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientServicesPage } from './client-services.page';

const routes: Routes = [
  {
    path: '',
    component: ClientServicesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientServicesPageRoutingModule { }
