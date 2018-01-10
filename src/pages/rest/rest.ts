import { Component , OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import {RestfutProvider} from'../../providers/restfut/restfut'

/**
 * Generated class for the RestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
class Customer {
  
  name: string;
 
}
@IonicPage()
@Component({
  selector: 'page-rest',
  templateUrl:  'rest.html'
})
export class RestPage   {
 
  catalogue :any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,public restfutProvider:RestfutProvider) {
   this.ngOnInit()
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad RestPage');
  }
  ngOnInit(){
    this.restfutProvider.getListCatalogue()
    .then(data =>{this.catalogue = data;
     alert(this.catalogue)});
  
  }
}
