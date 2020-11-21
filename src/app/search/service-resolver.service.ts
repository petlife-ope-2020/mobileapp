import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceResolver implements Resolve<any> {

  currentService: object;

  constructor() { }

  resolve() {
    return this.currentService
  };

  setService(service: object) {
    this.currentService = service
  };

}
