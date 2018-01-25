import { Component } from '@angular/core';
import {RestfutProvider} from '../../providers/restfut/restfut';
import {BonProvider} from '../../providers/bon/bon'
import {Validators, FormGroup, FormBuilder } from '@angular/forms';
import {ViewController, PopoverController } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';


/**
 * Generated class for the NouveauInventaireComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'nouveau-inventaire',
  templateUrl: 'nouveau-inventaire.html'
})
export class NouveauInventaireComponent {

  text: string;
   fut :any;

   private Bon : FormGroup;

   type2 :  any;
   postList : any;
   
  constructor(public catalogue : RestfutProvider,public inventaireService : BonProvider, public formBuilder:FormBuilder, public bonService : BonProvider, public popoverCtrl:PopoverController,public navParams :NavParams) {
  
    this.getCaracteristique();
   this.Bon = this.formBuilder.group({
      BonNum: ['', Validators.required],
      StockName: ['',  Validators.required],
      CliName: ['',  Validators.required],
      DateLivraison: ['',  Validators.required],
      caractere: ['',  Validators.required],
    });
  
  }
  
 /*getCatalogue() 
 {
  this.catalogue.getListCatalogue()
  .then(data =>{this.fut = data;
 });
 }

presentPopover(myEvent) {
  let popover = this.popoverCtrl.create(PopoverPage2);
  popover.present({
    ev: myEvent
  });
}*/
getCaracteristique(){
  this.inventaireService.getListOption()
  .then(data =>{this.type2 = data;
  //  this.initializeItems();
   // loadingPopup.dismiss();
  });

}
Ajout()
{

  console.log(this.Bon.value)
   this.inventaireService.createBon(this.Bon)
   .then(data => 
    {  this.postList.response = data;
      alert(data);}).catch(error => {
      console.log(error.status);
    });;
}
}





@Component({
  template: '<ion-item left>'
            +' <button *ngFor="let T of type2" ion-item (click)="NouveauInventaire(T.caraNom)">{{T.caraNom}}</button>'
             +'</ion-item>'
})
export class PopoverPage2 {
  type2 :  any;
  constructor(public viewCtrl: ViewController,public inventaireService : BonProvider,public navCtrl: NavController) 
  {
    this.getCaracteristique();
  }

NouveauInventaire(value : any) {
  console.log(value);
  this.navCtrl.push(NouveauInventaireComponent, {
    param1: 'value', 
});
  }
  getCaracteristique(){
    this.inventaireService.getListOption()
    .then(data =>{this.type2 = data;
    //  this.initializeItems();
     // loadingPopup.dismiss();
    });
  
  }
}