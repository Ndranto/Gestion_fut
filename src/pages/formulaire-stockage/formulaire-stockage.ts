import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup} from '@angular/forms'

/**
 * Generated class for the FormulaireStockagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulaire-stockage',
  templateUrl: 'formulaire-stockage.html',
})
export class FormulaireStockagePage   {
  postList: any = {};
  stockageId:any;
  Modify: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder : FormBuilder,public ViewCrtl:ViewController) {
    this.Modify = this.formBuilder.group({
      StcokId:[''],
      stockLieuStockage: ['', Validators.required],
      stockDescrStockage: [''],
    });
    this.ionViewDidLoad(); 
   }

  ionViewDidLoad() {
    this.stockageId = this.navParams.get('data');
    // alert(this.details);
    }
    closeModal() {
     
      this.ViewCrtl.dismiss();
    }

}
