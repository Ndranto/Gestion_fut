import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import{BonProvider} from '../../providers/bon/bon'

/**
 * Generated class for the BonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bon',
  templateUrl: 'bon.html',
})
export class BonPage {


  pet: string = "puppies";
  isAndroid: boolean = false;
  bon :any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public Service : BonProvider,public platform :Platform) {
  this.getlistBon();
  this.isAndroid = platform.is('android');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BonPage');
  }
  getlistBon(){
    this.Service.getlist()
    .then(data =>{
      this.bon = data;
      alert("data")
   });
}
}