import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ClientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClientProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ClientProvider Provider');
  }

  baseUrl: string = 'http://192.168.1.114:8081/';

  getListClient(){
    return new Promise(resolve => {
       this.http.get(this.baseUrl+'Jax-rs_Gestion_Fut/Client/ListClient')
       .subscribe(data => {
         resolve(data);
         alert(data);
       }, err => {
         alert("err");
       });
     });
}
}