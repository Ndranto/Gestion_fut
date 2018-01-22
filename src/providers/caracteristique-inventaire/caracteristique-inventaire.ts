import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CaracteristiqueInventaireProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CaracteristiqueInventaireProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CaracteristiqueInventaireProvider Provider');
  }
  
  baseUrl:string = 'http://192.168.1.114:8081/';
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
