import { Component , ViewChild } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { RestPage } from '../rest/rest';
import { LoginPage } from '../login/login';
import { ScrollableTabs } from '../../components/scrollable-tabs';
import { ClientPage } from '../client/client';
import {MagasinPage} from '../magasin/magasin';
import {TransportPage} from '../transport/transport';
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

  tabsColor: string = "default";
  tabsMode: string = "md";
  tabsPlacement: string = "top";

  tabToShow: Array<boolean> = [true, true, true, true, true, true, true, true, true];
  scrollableTabsopts: any = {};
/*
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = LoginPage;
*/
  constructor(public toastCtrl: ToastController) {

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
}
