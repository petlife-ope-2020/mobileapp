import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ServiceResolver } from '../service-resolver.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.page.html',
  styleUrls: ['./results-list.page.scss'],
})
export class ResultsListPage {

  resultList: Array<object>;

  constructor(
    private serviceSetter: ServiceResolver,
    private nav: NavController
  ) { }

  getResults(searchResults: Array<object>) {
    this.resultList = searchResults
  };

  goToSpecificService(serviceObject: any) {
    this.serviceSetter.setService(serviceObject)
    this.nav.navigateForward('service-page')
  };
}
