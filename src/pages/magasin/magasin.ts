import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController,Modal,  ModalOptions, ModalController} from 'ionic-angular';
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
  stockageList :any;
stockId:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public magasin : MagasinStockageProvider, public load : LoadingController
    ,public modalCrtl :  ModalController) {

    /*let loader = this.load.create({
      content: "Please wait...",
      duration: 3000
    });*/
    this.getMagasin();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MagasinPage');
  }
  getMagasin(){
    this.magasin.getListStockage()
    .then(data =>{
      this.stockageList = data;
     this.initializeItems();
     // loadingPopup.dismiss();
    });
  
  }
  
  initializeItems() {
    this.stockageList = this.stockageList;
  }
  getItems(ev: any) {
          // Reset items back to all of the items
          this.initializeItems();
          // set val to the value of the searchbar
          let val = ev.target.value;
          // if the value is an empty string don't filter the items
          if (val && val.trim() != '') {
            this.stockageList = this.stockageList.filter((item) => {
              return (item.stockLieuStockage.toLowerCase().indexOf(val.toLowerCase()) > -1);
            }) 
          }
  }
    /*Modication du fut à partir du  ModalPage*/ 
public openModal(value : any){     
         const myModalOptions: ModalOptions = 
             {    enableBackdropDismiss: false
             };
        this.magasin.getStockageID(value).
         then(data=>
              { this.stockId = data;
                let myModal: Modal = this.modalCrtl.create('FormulaireStockagePage',{ data: this.stockId }, myModalOptions);
                myModal.present();
                myModal.onDidDismiss((data) => {
                  console.log("I have dismissed.");
               });
                myModal.onWillDismiss((data) => {
                  console.log("I'm about to dismiss");
                });  
        }
        );  

      }  
}