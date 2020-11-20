import { Storage } from '@ionic/storage'
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';


@Injectable()
export class Resolver implements Resolve<any> {

  constructor(private storage: Storage) { }

  async resolve(){
    return await this.storage.get('userObject')
  };

}
