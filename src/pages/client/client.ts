import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup} from '@angular/forms'
import { HomePage } from '../home/home';
import {ClientProvider} from '../../providers/client/client';
/**
 * Generated class for the ClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client',
  templateUrl: 'client.html',
})
export class ClientPage {
  private todo : FormGroup;
  Client :any;
  mag :any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, public viewCtrl: ViewController,
    public cli : ClientProvider,public appCtrl: App) {
    this.todo = this.formBuilder.group({
      Name: ['', Validators.required],
      Adress: ['', Validators.required],
      Telephone: ['', Validators.required],
      description: [''],
    });
    this.getClient();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientPage');
  }
 
  logForm(){
    console.log(this.todo.value)
  }
//return in preview page
  pushPage() {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push(HomePage);
  }

  getClient(){
    this.cli.getListClient()
    .then(data =>{this.Client = data;
      this.initializeItems();
    });
  
  }
  
  initializeItems() {
    this.mag = this.Client;
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.Client = this.Client.filter((item) => {
        return (item.cliNom.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    
    }
  }
}
