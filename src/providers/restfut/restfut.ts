
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';




/*
  Generated class for the RestfutProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestfutProvider {

  futid :any;
  constructor(public http: HttpClient) {
    console.log('');
    this.http =http;
    this.getListCatalogue();
  }
    baseUrl:string = 'http://localhost:8081/';
 // apiUrl = 'http://localhost:8081/';
 
  getListCatalogue(){
   

    return new Promise(resolve => {
      this.http.get(this.baseUrl+'Jax-rs_Gestion_Fut/fut/Listfut').subscribe(data => {
        resolve(data);
        alert(data);
      }, err => {
        alert(err);
      });
    });
     
   
    }
      private handleErrorObservable (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.message || error);
    }
/*
  public _addStandardHeaders(header:HttpHeaders)
  {
    header = header.append('Content-Type',' application/json;charset=UTF-8');
    header = header.append('Accept','application/json'); 
    return header;
  }

// custom method to initialize reqOpts
  public _initializeReqOpts(reqOpts)
  {
    if (!reqOpts) {
      reqOpts = {
       headers: new HttpHeaders(),
       params: new HttpParams()
      };
    }
    return reqOpts;
  }*/

  
  /*
  public getProducts():Observable<CatalogueFut[]>{
    return this.http.get(this.baseUrl+'Jax-rs_Gestion_Fut/fut/string').
    map(catalogueFut => {
      return catalogueFut.map((catalogueFut)=> new CatalogueFut(catalogueFut)); })
      .catch((error) =>
      {console.error(error);}) ;
  }

  private newMethod(): (err: any, caught: Observable<T>) => Subscribable<R> | PromiseLike<R> | ArrayLike<R> {
    return (err) => { };
  }

  // Sending a POST request to /products
  public createProduct(product: CatalogueFut) {
  }

  // Sending a GET request to /products/:id
  public getProductById(productId: number) {
  }

  // Sending a PUT request to /products/:id
  public updateProduct(product: CatalogueFut){
  }

  // Sending a DELETE request to /products/:id
  public deleteProductById(productId: number) { 
  } */

}