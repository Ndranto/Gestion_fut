import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler  } from 'ionic-angular';
import { MyApp } from './app.component';
import { PopoverPage } from './app.component';
import { PopoverPage2 } from '../components/nouveau-inventaire/nouveau-inventaire';
import { AboutPage } from '../pages/about/about';
import { RestPage } from '../pages/rest/rest';
import { ModalPageModule } from '../pages/modal/modal.module';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MagasinPage } from '../pages/magasin/magasin';
import { TabsPage } from '../pages/tabs/tabs';
import {SituationMagasinPage} from '../pages/situation-magasin/situation-magasin'
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
import { InventairePage} from '../pages/inventaire/inventaire';
import { VilleProvider } from '../providers/ville/ville';
import { TransportsProvider } from '../providers/transports/transports';
import { CaracteristiqueInventaireProvider } from '../providers/caracteristique-inventaire/caracteristique-inventaire';
import { StockageHistoryProvider } from '../providers/stockage-history/stockage-history';
import { ClientProvider } from '../providers/client/client';
import { SituationstockageProvider } from '../providers/situationstockage/situationstockage';
import { BonProvider } from '../providers/bon/bon';
import { BonPage } from '../pages/bon/bon';
import {NouveauInventaireComponent} from '../components/nouveau-inventaire/nouveau-inventaire';
import {AjoutFutBonComponent} from '../components/ajout-fut-bon/ajout-fut-bon';



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
    RestPage,
    TransportPage,
    InventairePage,
    SituationMagasinPage,
    ScrollableTabs,
    BonPage,
    PopoverPage,
    NouveauInventaireComponent,
    PopoverPage2,
    AjoutFutBonComponent,
  ],
  imports: [ 
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      menuType: 'push',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    }),
    ModalPageModule,

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
    RestPage,
    MagasinPage,
    InventairePage,
    SituationMagasinPage,
    TransportPage,
    BonPage,
    PopoverPage,
    NouveauInventaireComponent,
    PopoverPage2,
    AjoutFutBonComponent,

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
    ClientProvider,
    SituationstockageProvider,
    BonProvider,
  ]
})
export class AppModule {}
