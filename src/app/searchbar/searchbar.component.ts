import { Component, OnInit } from '@angular/core';
import { SearchService } from '../apis/search.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {

  resultList: Array<object>;
  focused: boolean;

  constructor(private searchService: SearchService) { }

  ngOnInit() {

  }

  doSearch(userInput) {
    const searchTerm = String(userInput)
    this.searchService.search(searchTerm).subscribe(res => {
      this.resultList = res
    },
      err => {
        return
      })
  };

  onFocus() {
    this.focused = true;
  };

  onBlur() {
    this.focused = false;
  };

};
