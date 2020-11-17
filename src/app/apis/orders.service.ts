import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  apiAddress: string = '';

  constructor(private http: HttpClient) { }

  placeOrder(newOrder: any): Observable<any> {
    let form = new FormData();
    Object.keys(newOrder).forEach(key => {
      form.append(key, newOrder.key)
    });
    return this.http.post(`${this.apiAddress}/client`, form);
  };

  cancelOrder(orderId: string): Observable<any> {
    return this.http.delete(`${this.apiAddress}/client?order_id=${orderId}`)
  };

  getOrders(username: string): Observable<any> {
    return this.http.get(`${this.apiAddress}/client?username=${username}`)
  };

};
