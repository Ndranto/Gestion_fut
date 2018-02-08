import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Platform, ModalController,Modal,  ModalOptions ,ViewController,App} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {RestfutProvider} from'../../providers/restfut/restfut'
import {Validators, FormBuilder, FormGroup} from '@angular/forms'
import { DetailfutComponent } from '../../components/detailfut/detailfut';

/**
 * Generated class for the RestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rest',
  templateUrl:'rest.html'
})
export class RestPage   {
  private todo : FormGroup;
  catalogue :any;
  details: any;
  isAndroid: boolean = false;
  pet: string = "puppies";
  postList: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams
              ,public restfutProvider:RestfutProvider, public platform :Platform,
               public formBuilder :FormBuilder, public modal :  ModalController
               ,public viewCtrl :ViewController,  public appCtrl: App) {

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
   const myModalOptions: ModalOptions = 
    {
      enableBackdropDismiss: false
    };
    this.restfutProvider.getProductById(value).then(data=>
        {
          this.details = data;
          let myModal: Modal = this.modal.create('ModalPage', { data: this.details }, myModalOptions);
          myModal.present();

          myModal.onDidDismiss((data) => {console.log("I have dismissed.");});
          myModal.onWillDismiss((data) => {console.log("I'm about to dismiss");   });      
        });
   }    
    Details(value , event) {
      let btnid = event.target.name ;
      this.appCtrl.getRootNav().push(DetailfutComponent,{idFut:value , etatFut:btnid});
   
      }
    
}

