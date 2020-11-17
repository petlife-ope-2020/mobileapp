import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiAddress: string = '';

  constructor(private http: HttpClient) { }

  search(user_query: string): Observable<any> {
    return this.http.get(`${this.apiAddress}/service_name=${user_query}`)
  };
};
