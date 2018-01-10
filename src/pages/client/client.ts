import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup} from '@angular/forms'
import { HomePage } from '../home/home';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder, public viewCtrl: ViewController,
    public appCtrl: App) {
    this.todo = this.formBuilder.group({
      Name: ['', Validators.required],
      Adress: ['', Validators.required],
      Telephone: ['', Validators.required],
      description: [''],
    });
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
}
