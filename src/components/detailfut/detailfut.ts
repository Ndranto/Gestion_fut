import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { DetailFusProvider } from '../../providers/detail-fus/detail-fus';
import { MagasinStockageProvider } from '../../providers/magasin-stockage/magasin-stockage';

/**
 * Generated class for the DetailfutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'detailfut',
  templateUrl: 'detailfut.html'
})
export class DetailfutComponent {

  public idFut  : string;
  public etatFut :string;
  public details : any;
  public stockageList : any;
  constructor(public navParams: NavParams , public serviceDetailsfut :  DetailFusProvider ,public magasin : MagasinStockageProvider) {
    this.idFut =this.navParams.get('idFut');
    this.etatFut =this.navParams.get('etatFut');
    this.getNameStockage();
   this.getDetailsfut(this.etatFut,this.idFut);
  }
  getDetailsfut(etatFut:string,idFut : string) 
  {

    return this.serviceDetailsfut.getfutactuelService(etatFut ,idFut)
    .then(data => 
      {
        this.details = data;
      })
  }
  initializeItems()
  {
    this.stockageList = this.stockageList;
  }
  getNameStockage()
  {
    this.magasin.getListStockage()
    .then(data =>{
      this.stockageList = data;
     this.initializeItems();
     // loadingPopup.dismiss();
    });
  }
}
