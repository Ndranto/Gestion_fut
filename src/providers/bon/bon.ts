import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BonProvider {
  data :any;
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
       }, err => {
         alert(err);
       });
     });
      
    }
      
   getListOption()
   {
     return new Promise(resolve => {
       this.http.get(this.baseUrl+'Jax-rs_Gestion_Fut/Caracteristique/ListCaracteristique')
       .subscribe(data => {
         resolve(data);
       }, err => {
         alert(err);
       });
     });
      
    }
    public createBon(bon: any) {         
      const body = new HttpParams().set("futNomCatalogueFut", bon.value.futNomCatalogueFut).set("futDescrCatalogueFut", bon.value.futDescrCatalogueFut);
      console.log(body);
   
    //let options = new RequestOptions({ headers: headers });
        return new Promise((resolve) => {
          this.http.post(this.baseUrl+'Jax-rs_Gestion_Fut/fut/addForm', body.toString(), {headers :new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded; charset=utf-8"),responseType: 'text'})
          .subscribe(data => {
            resolve(data);
            this.data = data;
     alert("mety");
         }, (err) => {
              
              alert(err.data);
              console.log('Error: ' + err.error);
              console.log('Name: ' + err.name);
              console.log('Message: ' + err.message);
              console.log('Status: ' + err.status);
              console.log('erreur: ' + err);
            });
           
        });
       
      }
    
}
