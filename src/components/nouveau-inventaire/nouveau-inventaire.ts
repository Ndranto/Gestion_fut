import { Component } from '@angular/core';
import {RestfutProvider} from '../../providers/restfut/restfut';
import {BonProvider} from '../../providers/bon/bon'
import {Validators, FormGroup, FormBuilder } from '@angular/forms';
import {App,ViewController, PopoverController } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { AjoutFutBonComponent } from '../ajout-fut-bon/ajout-fut-bon';
import{ClientProvider} from '../../providers/client/client';
import{MagasinStockageProvider} from '../../providers/magasin-stockage/magasin-stockage'


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

 public evenement:string;
   fut :any;
   private Bon : FormGroup;
   type2 :  any;
   Client :any;
   magasin : any;
   public postReponse: any  = {};
  

  constructor(public catalogue : RestfutProvider,public Bonservice : BonProvider,
     public formBuilder:FormBuilder, public bonService : BonProvider, 
     public popoverCtrl:PopoverController,public navParams :NavParams, public navCrtl : NavController,public viewcrtl :ViewController,
     public _clientProvider:ClientProvider, public _stockageService: MagasinStockageProvider,public appCtrl: App ) {
              this.evenement =this.navParams.get('typeBon');
              this.getCaracteristique();
              this.sowClientName();
              this.ShowStockName();
              this.Bon = this.formBuilder.group({
              refBon: ['', Validators.required],
              StockName: ['',  Validators.required],
              clientName: ['',  Validators.required],
              BonDate: ['',  Validators.required],
              caractere: ['',  Validators.required],
              BonValidation:[],
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
            this.Bonservice.getListOption()
            .then(data =>{this.type2 = data;
            //  this.initializeItems();
            // loadingPopup.dismiss();
            });

          }
          Ajout()
          {
          
            this.navCrtl.push(AjoutFutBonComponent,{ typeBon:this.Bon.value}).then(() => {
              const startIndex = this.navCrtl.getActive().index - 2;
              this.navCrtl.remove(startIndex, 2);
            });
          
          /*  console.log(this.Bon.value)
            this.Bonservice.createBon(this.Bon)
            .then(data => 
              {  this.postReponse.response = data;
                
               
                }).catch(error => {
               this.postReponse ="Erreur d'insertion ";
              });
            
              */
          }
          Validation()
          {
            if ( this.Bon.controls['BonValidation'].value ) {
              (this.Bon.controls['BonValidation']).setValue(true, { onlySelf: false });
              } else {
              (this.Bon.controls['BonValidation']).setValue(false, { onlySelf: true });
              }
          }
          
         
         sowClientName()
         {
          this._clientProvider.getListClient()
          .then(data =>
            {
              this.Client = data;  
          //  this.initializeItems();
          // loadingPopup.dismiss();
          });

         }
         ShowStockName()
         {
              this._stockageService.getListStockage()
              .then(data=>
                {
              this.magasin = data});
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