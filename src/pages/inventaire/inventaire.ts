import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InventaireProvider} from '../../providers/inventaire/inventaire';

/**
 * Generated class for the InventairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inventaire',
  templateUrl: 'inventaire.html',
})
export class InventairePage {
  inventaire :any;
  mag :any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public innventaireService: InventaireProvider) {
  this.getListInventaire();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InventairePage');
  } 
  
  getListInventaire(){
    this.innventaireService.getInventaire()
    .then(data =>{this.inventaire = data;
      this.initializeItems();
     // loadingPopup.dismiss();
    });
  
  }
  
  initializeItems() {
    this.mag = this.inventaire;
  }
  
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.inventaire = this.inventaire.filter((item) => {
        return (item.iinvDate.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    
    }
  }
}
