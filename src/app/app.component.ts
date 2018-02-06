import { Component } from '@angular/core';
import { Platform,MenuController,PopoverController,ViewController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import {InventaireProvider} from '../providers/inventaire/inventaire'
import {NouveauInventaireComponent} from '../components/nouveau-inventaire/nouveau-inventaire';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'

})
export class MyApp {
 // @ViewChild('sectionSelect') sectionSelect: Select;
  rootPage:any = LoginPage;
  page:any =[];
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public menuCtrl: MenuController, public popoverCtrl:PopoverController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openToggle() {
    console.log("mety");
    this.menuCtrl.open();
  }
  /*doFilter(){
    this.sectionSelect.open();
    console.log('hello')
 }*/
 presentPopover(myEvent) {
  let popover = this.popoverCtrl.create(PopoverPage);
  popover.present({
    ev: myEvent
  });
}
  


}

@Component({
  template: `
    <ion-list>
      <ion-list-header>Nouveau inventaire</ion-list-header>
    
      <button *ngFor="let T of type" ion-item (click)="NouveauInventaire(T.typeName)">{{T.typeName}}</button>
      
    </ion-list>
  `
})
export class PopoverPage {
  type :  any;
  constructor(public viewCtrl: ViewController,public inventaireService : InventaireProvider, public nav : NavController) 
  {
    this.getCaracteristique();
  }

NouveauInventaire(value : any) {
  
  this.nav.push(NouveauInventaireComponent,{ typeBon:value});
  this.viewCtrl.dismiss();
  }
  getCaracteristique(){
    this.inventaireService.getCaracteristique()
    .then(data =>{this.type = data;
    //  this.initializeItems();
     // loadingPopup.dismiss();
    });
  
  }


}