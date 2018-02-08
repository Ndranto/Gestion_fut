import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DetailFusProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DetailFusProvider {
  baseUrl:string = 'http://192.168.1.114:8081/';
  constructor(public http: HttpClient) {
    console.log('Hello DetailFusProvider Provider');
  }
  getfutactuelService(etatFut: string,futId :string )
  {
    alert(etatFut+futId)
    return new Promise(resolve => {
      this.http.get(this.baseUrl+'Jax-rs_Gestion_Fut/Categoriser/Detailsfut?etatFut='+etatFut+'&futId='+futId+'')
      .subscribe(data => {
        resolve(data);
      }, err => {
        alert(err);
      });
    });
     
   }
}
