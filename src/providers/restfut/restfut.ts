
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';






/*
  Generated class for the RestfutProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestfutProvider {
CatalogueFut :any;
  futid :any;
  data: any;
  constructor(public http: HttpClient) {
    console.log('');
    this.http =http;
    this.getListCatalogue();
  }
    baseUrl:string = 'http://192.168.1.114:8081/';

 // apiUrl = 'http://localhost:8081/';
 
  getListCatalogue(){
   

    return new Promise(resolve => {
      this.http.get(this.baseUrl+'Jax-rs_Gestion_Fut/fut/Listfut').subscribe(data => {
        resolve(data);
        alert("mety");
      }, err => {
        alert(err);
      });
    });
     
   
    }

  // Sending a POST request to /products
  public createProduct(product: any) {         
    const body = new HttpParams().set("futNomCatalogueFut", product.value.futNomCatalogueFut).set("futDescrCatalogueFut", product.value.futDescrCatalogueFut);
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
  

  // Sending a GET request to /products/:id
  public getProductById(productId: any) {
  alert(productId);
    return new Promise(resolve => {
      this.http.get(this.baseUrl+'Jax-rs_Gestion_Fut/fut/idFut/'+productId+'').subscribe(data => {
        resolve(data);
      
      }, err => {
        alert(err);
      });
    });
  }
  

  // Sending a PUT request to /products/:id
  public updateProduct(product:any){

    const body = new HttpParams().set("futNomCatalogueFut", product.value.futNomCatalogueFut).set("futDescrCatalogueFut", product.value.futDescrCatalogueFut);
    console.log(body);
 
  //let options = new RequestOptions({ headers: headers });
      return new Promise((resolve) => {
        this.http.post(this.baseUrl+'Jax-rs_Gestion_Fut/fut/Update/'+product.value.futId,body.toString(),{headers :new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded; charset=utf-8"),responseType: 'text'})
        .subscribe(data => {
          resolve(data);
          this.data = data;
         alert("mety");
       }, (err) => {
            
            alert(err.message);
            console.log('Error: ' + err.error);
            console.log('Name: ' + err.name);
            console.log('Message: ' + err.message);
            console.log('Status: ' + err.status);
            console.log('erreur: ' + err);
          });
         
      });
  }
  
/*
  // Sending a DELETE request to /products/:id
  public deleteProductById(productId: number) { 
  } */
      /*private handleErrorObservable (error: Response | any) {
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
*//*
  private newMethod(): (err: any, caught: Observable<T>) => Subscribable<R> | PromiseLike<R> | ArrayLike<R> {
    return (err) => { };
  }
*/
}