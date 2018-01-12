import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler,IonicPage, NavController, NavParams, App, ViewController,ModalController, AlertController, Platform, LoadingController  } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup} from '@angular/forms'
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { RestPage } from '../pages/rest/rest';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MagasinPage } from '../pages/magasin/magasin';
import { ModalContentPage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
 import { ClientPage } from '../pages/client/client';
 import { TransportPage } from '../pages/transport/transport';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RestfutProvider } from '../providers/restfut/restfut';
import { ScrollableTabs } from '../components/scrollable-tabs';
import { InventaireProvider } from '../providers/inventaire/inventaire';
import { SituationFutProvider } from '../providers/situation-fut/situation-fut';
import { AchatFutProvider } from '../providers/achat-fut/achat-fut';
import { DetailFusProvider } from '../providers/detail-fus/detail-fus';
import { MagasinStockageProvider } from '../providers/magasin-stockage/magasin-stockage';
import { VilleProvider } from '../providers/ville/ville';
import { TransportsProvider } from '../providers/transports/transports';
import { CaracteristiqueInventaireProvider } from '../providers/caracteristique-inventaire/caracteristique-inventaire';
import { StockageHistoryProvider } from '../providers/stockage-history/stockage-history';
import { ClientProvider } from '../providers/client/client';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ClientPage,
    MagasinPage,
    ModalContentPage,
    RestPage,
    TransportPage,
    ScrollableTabs
    

  ],
  imports: [ 
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ClientPage,
    ModalContentPage,
    RestPage,
    MagasinPage,
    TransportPage
    
    
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestfutProvider,
    InventaireProvider,
    SituationFutProvider,
    AchatFutProvider,
    DetailFusProvider,
    MagasinStockageProvider,
    VilleProvider,
    TransportsProvider,
    CaracteristiqueInventaireProvider,
    StockageHistoryProvider,
    ClientProvider
   
  ]
})
export class AppModule {}
