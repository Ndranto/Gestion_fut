import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {RestfutProvider} from'../../providers/restfut/restfut'
import {Validators, FormBuilder, FormGroup} from '@angular/forms'
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  details:any;
  private Modify : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams
    , public ViewCrtl :  ViewController,
    public restfutProvider: RestfutProvider, public formBuilder : FormBuilder) {

    this.Modify = this.formBuilder.group({
      futNomCatalogueFut: ['', Validators.required],
      futDescrCatalogueFut: [''],
    });
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    let data = this.navParams.get('data');
    console.log(data);
  }
  closeModal() {
    const data = {
      name: 'John Doe',
      occupation: 'Milkman'
    };
    this.ViewCrtl.dismiss(data);
  }
  Modification()
  {
     
 }
}
