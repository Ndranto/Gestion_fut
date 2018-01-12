import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransportsProvider} from '../../providers/transports/transports';
/**
 * Generated class for the TransportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transport',
  templateUrl: 'transport.html',
})
export class TransportPage {
  Transport :any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public transportservice: TransportsProvider) {
    this.getTransport();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportPage');
  }
  getTransport(){
    this.transportservice.getListCatalogue()
    .then(data =>{this.Transport = data;
      this.initializeItems();
    });
  
  }
  
  initializeItems() {
    this.Transport = this.Transport;
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.Transport = this.Transport.filter((item) => {
        return (item.transIm.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    
    }
  }
}
