import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MagasinStockageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MagasinStockageProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MagasinStockageProvider Provider');
  }
  baseUrl: string = 'http://192.168.1.114:8081/';
  getListStockage(){
     return new Promise(resolve => {
       this.http.get(this.baseUrl+'Jax-rs_Gestion_Fut/Stockage/ListStockage')
       .subscribe(data => {
         resolve(data);
         alert(data);
       }, err => {
         alert(err);
       });
     });
      
}
 // Sending a GET request to /Stockage/:id
 public getStockageID(stockageId: any) {
 
    return new Promise(resolve => {
      this.http.get(this.baseUrl+'Jax-rs_Gestion_Fut/Stockage/stockId/'+stockageId+'')
        .subscribe(data => {
        resolve(data);
      }, err => {
        alert(err);
      });
    });
  }
}
