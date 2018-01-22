import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Platform, ModalController, ViewController,Modal,  ModalOptions } from 'ionic-angular';
import { HttpClient , HttpParams} from '@angular/common/http';
import {RestfutProvider} from'../../providers/restfut/restfut'
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import {Validators, FormBuilder, FormGroup} from '@angular/forms'

/**
 * Generated class for the RestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rest',
  templateUrl:  'rest.html'
})
export class RestPage   {
  private todo : FormGroup;
  catalogue :any;
  details: any;
  isAndroid: boolean = false;
  pet: string = "puppies";
  postList: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient
              ,public restfutProvider:RestfutProvider, public platform :Platform,
               public formBuilder :FormBuilder, public modal :  ModalController) {

   this. getCatalogueFit();
   this.todo = this.formBuilder.group({
    futNomCatalogueFut: ['', Validators.required],
    futDescrCatalogueFut: [''],
  });
   this.isAndroid = platform.is('android');
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad RestPage');
  }
  getCatalogueFit(){
    this.restfutProvider.getListCatalogue()
    .then(data =>{this.catalogue = data;
   });
  
  }
  Ajout()
  {

    console.log(this.todo.value)
     this.restfutProvider.createProduct(this.todo)
     .then(data => 
      {  this.postList.response = data;
        alert(data);}).catch(error => {
        console.log(error.status);
      });;
  }
/*
  presentProfileModal() {
    let profileModal = this.modalcrtl.create(Profile, { userId: 8675309 });
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }
  */


  /*Modication du fut à partir du  ModalPage*/ 
  public openModal(value : any){

    alert(value);



    this.restfutProvider.getProductById(value).then(data=>
      {this.details = data;
      alert(data)
      }
      );  

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };

    const myModalData = {
      name: 'Paul Halliday',
      occupation: 'Developer'
    };

    const myModal: Modal = this.modal.create('ModalPage', { data: this.details }, myModalOptions);

    myModal.present();

    myModal.onDidDismiss((data) => {
      console.log("I have dismissed.");
      console.log(data);
    });

    myModal.onWillDismiss((data) => {
      console.log("I'm about to dismiss");
      console.log(data);
    });
    }    
    
}

