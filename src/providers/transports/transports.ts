import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Console } from '@angular/core/src/console';

/*
  Generated class for the TransportsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransportsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TransportsProvider Provider');
  }
  baseUrl:string = 'http://192.168.1.114:8081/';
  getListCatalogue(){
    
 
     return new Promise(resolve => {
       this.http.get(this.baseUrl+'Jax-rs_Gestion_Fut/Transport/ListTransport').subscribe(data => {
         resolve(data);
         console.log(data);
         (data);
       }, err => {
         alert(err);
       });
     });
      
}
}
