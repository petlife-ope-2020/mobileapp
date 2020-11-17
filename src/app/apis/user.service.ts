import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiAddress: string = '';

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string): Observable<any> {
    let form = new FormData();
    form.append('username', username)
    form.append('password', password)
    form.append('type', 'client')
    return this.http.post(`${this.apiAddress}/auth`, {
      data: form
    });
  };

  registerUser(newUser: any): Observable<any> {
    let form = new FormData();
    Object.keys(newUser).forEach(key => {
      form.append(key, newUser.key)
    });
    return this.http.post(`${this.apiAddress}/clients`, {
      data: form
    });
  };

  updateUser(updatedUser: any): Observable<any> {
    let form = new FormData();
    Object.keys(updatedUser).forEach(key => {
      form.append(key, updatedUser.key)
    });
    return this.http.put(`${this.apiAddress}/clients`, {
      data: form
    });
  };
};
