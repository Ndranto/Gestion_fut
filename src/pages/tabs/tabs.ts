import { Component  } from '@angular/core';
import { ToastController,Platform,MenuController,PopoverController,ViewController, NavController,NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { RestPage } from '../rest/rest';
import { LoginPage } from '../login/login';
import { ScrollableTabs } from '../../components/scrollable-tabs';
import { ClientPage } from '../client/client';
import {MagasinPage} from '../magasin/magasin';
import {TransportPage} from '../transport/transport';
import {InventairePage} from '../inventaire/inventaire';
import {BonPage} from '../bon/bon';
import{PopoverPage} from '../../app/app.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  AboutRoot: any = AboutPage;
  HomePage: any = HomePage;
  ContactPage: any = ContactPage;
  RestPage: any = RestPage;
  ClientPage : any = ClientPage;
  MagasinPage : any = MagasinPage;
  TransportPage: any =TransportPage;
  Inventaire: any = InventairePage;
  bonpage: any = BonPage;
  tabsColor: string = "default";
  tabsMode: string = "md";
  tabsPlacement: string = "top";
  myIndex :Number;
  tabToShow: Array<boolean> = [true, true, true, true, true, true, true, true, true];
  scrollableTabsopts: any = {};
/*
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = LoginPage;
*/
  constructor(public toastCtrl: ToastController,public menuCtrl: MenuController, public popoverCtrl:PopoverController,public navParams:NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

  refreshScrollbarTabs() {
    this.scrollableTabsopts = { refresh: true };    
  }

  presentChangeOrendationToast() {
    let toast = this.toastCtrl.create({
      message: 'Rotate screen to rerendering.',
      duration: 2000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
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
