import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the VilleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VilleProvider {

  constructor(public http: HttpClient) {
    console.log('Hello VilleProvider Provider');
  }
  baseUrl:string = 'http://localhost:8081/';
  getListCatalogue(){
    
 
     return new Promise(resolve => {
       this.http.get(this.baseUrl+'Jax-rs_Gestion_Fut/Stockage/ListStockage').subscribe(data => {
         resolve(data);
         alert(data);
       }, err => {
         alert(err);
       });
     });
      
}
}
