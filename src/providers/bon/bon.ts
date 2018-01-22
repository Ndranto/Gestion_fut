import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BonProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BonProvider Provider');
 
  }
  baseUrl:string = 'http://192.168.1.114:8081/';
  // apiUrl = 'http://localhost:8081/';
  
   getlist()
   {
     return new Promise(resolve => {
       this.http.get(this.baseUrl+'Jax-rs_Gestion_Fut/Bon/list')
       .subscribe(data => {
         resolve(data);
         alert("mety");
       }, err => {
         alert(err);
       });
     });
      
    }
}
