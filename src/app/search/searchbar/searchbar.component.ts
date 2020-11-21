import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSearchbar, NavController } from '@ionic/angular';
import { SearchService } from '../../apis/search.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements AfterViewInit {

  resultList: Array<object>;
  @ViewChild('searchBar') searchBar: IonSearchbar;
  @Output() resultsEvent = new EventEmitter<Array<object>>()

  constructor(
    private searchService: SearchService,
    private nav: NavController,
    private route: Router
  ) { }

  ngAfterViewInit(){
    if (this.route.url === '/results-list') {
      setTimeout(async () => {
        await this.searchBar.setFocus()
      }, 100);
    }
  };

  doSearch(userInput: string) {
    this.searchService.search(userInput).subscribe(res => {
      userInput.trim() ? this.resultsEvent.emit(res): this.resultsEvent.emit(null)
    }, err => { })
  };

  onFocus() {
    if (this.route.url != '/results-list') {
      this.nav.navigateForward('results-list')
    }
  };

  onCancel() {
    window.history.back()
  };

};
