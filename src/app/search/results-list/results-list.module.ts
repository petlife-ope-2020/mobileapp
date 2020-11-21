import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonSearchbar } from '@ionic/angular';

import { ResultsListPageRoutingModule } from './results-list-routing.module';

import { ResultsListPage } from './results-list.page';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultsListPageRoutingModule
  ],
  declarations: [
    ResultsListPage,
    SearchbarComponent
  ],
  providers: [
    IonSearchbar
  ]
})
export class ResultsListPageModule {}
