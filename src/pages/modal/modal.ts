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
  postList: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams
    , public ViewCrtl :  ViewController,
    public restfutProvider: RestfutProvider, public formBuilder : FormBuilder) {
   // console.log( console.log(navParams.get('data')));
    this.Modify = this.formBuilder.group({
      futId:[''],
      futNomCatalogueFut: ['', Validators.required],
      futDescrCatalogueFut: [''],
    });
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
   this.details = this.navParams.get('data');
   // alert(this.details);
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
     console.log(this.Modify);
     this.restfutProvider.updateProduct(this.Modify)
     .then(data => 
      {  this.postList.response = data;
       
        console.log(data);}).catch(error => {
        console.log(error.status);
      });
   }
 
}
