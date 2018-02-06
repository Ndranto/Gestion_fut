import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SituationstockageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SituationstockageProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SituationstockageProvider Provider');
  }
  baseUrl: string = 'http://192.168.1.114:8081/';

    getListSituationStockage(){
      return new Promise(resolve => {
         this.http.get(this.baseUrl+'Jax-rs_Gestion_Fut/Situation/Magasin?Magasin=Antananarivo&Etat=false')
      
         .subscribe(data => {
           resolve(data);
           alert("ok");
         }, err => {
           alert("err");
         });
       });
  }

  
}
