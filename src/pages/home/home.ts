import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
  console.log("Bonjour");

  
  }
  alertaction():void {
    let alert = this.alertCtrl.create({
    title:"alert ! ",
    subTitle:'ionic projet',
    buttons:['ok']

    });
alert.present();
  }

}
