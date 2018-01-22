import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController} from 'ionic-angular';
import {MagasinStockageProvider} from '../../providers/magasin-stockage/magasin-stockage';

/**
 * Generated class for the MagasinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-magasin',
  templateUrl: 'magasin.html',
})
export class MagasinPage {
stockage :any;
mag :any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public magasin : MagasinStockageProvider, public load : LoadingController) {
  
   
    let loader = this.load.create({
      content: "Please wait...",
      duration: 3000
    });
    this.getMagasin(loader);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MagasinPage');
  }
  getMagasin(loadingPopup){
    this.magasin.getListCatalogue()
    .then(data =>{this.stockage = data;
      this.initializeItems();
      loadingPopup.dismiss();
    });
  
  }
  
  initializeItems() {
    this.mag = this.stockage;
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.stockage = this.stockage.filter((item) => {
        return (item.stockLieuStockage.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    
    }
  }
}