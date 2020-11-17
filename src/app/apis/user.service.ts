import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiAddress: string = 'http://localhost:8085';

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string): Observable<any> {
    let form = new FormData();
    form.append('username', username);
    form.append('password', password);
    form.append('type', 'client');
    return this.http.post(`${this.apiAddress}/auth`, form);
  };

  registerUser(newUser: object): Observable<any> {
    let form = new FormData();
    Object.keys(newUser).forEach(key => {
      form.append(key, newUser[key])
    });

    console.log(newUser)
    return this.http.post(`${this.apiAddress}/clients`, form);
  };

  updateUser(updatedUser: any): Observable<any> {
    let form = new FormData();
    Object.keys(updatedUser).forEach(key => {
      form.append(key, updatedUser[key])
    });
    console.log(updatedUser)
    return this.http.put(`${this.apiAddress}/clients`, form);
  };
};
