import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AchatFutProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AchatFutProvider {
  baseUrl:string = 'http://192.168.1.114:8081/';
  constructor(public http: HttpClient) {
    console.log('Hello AchatFutProvider Provider');
  }

  getlist()
  {
    return new Promise(resolve => {
      this.http.get(this.baseUrl+'Jax-rs_Gestion_Fut/Bon/list')
      .subscribe(data => {
        resolve(data);
      }, err => {
        alert(err);
      });
    });
     
   }
}
