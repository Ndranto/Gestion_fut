import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SituationstockageProvider} from '../../providers/situationstockage/situationstockage'


/**
 * Generated class for the SituationMagasinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-situation-magasin',
  templateUrl: 'situation-magasin.html',
})
export class SituationMagasinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public SITUATION_MAGASIN : SituationstockageProvider) {
  this.getSituationMagasin();
  }
  situation_stockage : any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad SituationMagasinPage');
  }
  getSituationMagasin(){
    this.SITUATION_MAGASIN.getListSituationStockage()
    .then(data =>{this.situation_stockage= data;
      this.initializeItems();
    });
  }
    initializeItems() {
      this.situation_stockage = this.situation_stockage;
    }
  }

