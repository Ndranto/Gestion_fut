import { Component } from '@angular/core';
import { NavController,ModalController, AlertController, Platform, NavParams, ViewController,LoadingController } from 'ionic-angular';
import { ClientPage } from '../client/client';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 names : any = true;
 Option :string;
 images = ['1.jpg','2.jpg','3.jpg'];
 items = [
  {
    title: 'Courgette daikon',
    content: 'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
    icon: 'calendar',
    time: {subtitle: '4/16/2013', title: '21:30'}
  },
  {
    title: 'Courgette daikon',
    content: 'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
    icon: 'calendar',
    time: {subtitle: 'January', title: '29'}
  },
  {
    title: 'Courgette daikon',
    content: 'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
    icon: 'calendar',
    time: {title: 'Short Text'}
  }
]
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public modalCtrl: ModalController,public loadingCtrl: LoadingController) {
  console.log("Bonjour");
  
  
  this.Option="Client";

  this.initializeItems();
  }


  initializeItems() 
  {
    this.names =['Ndranto','Jennifer','Tendry']
  }

  //Function talk detail of each customer
  openModal(characterNum) {
    
        let modal = this.modalCtrl.create(ModalContentPage, characterNum);
        modal.present();
      }

 ModalAddCustomer() {
        
      let modal = this.modalCtrl.create(ClientPage);
       modal.present();
          }

   // Key event search client   
      getItems(ev: any) {
        // Reset items back to all of the items
        this.initializeItems();
    
        // set val to the value of the searchbar
        let val = ev.target.value;
    
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.names = this.names.filter((item) => {
            return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }
}

//Loading page
presentLoading() {
  let loader = this.loadingCtrl.create({
    content: "Please wait...",
    duration: 3000
  });
  loader.present();
}
}
@Component({
  templateUrl:'modal-content.html' 
})



//Detail of customer
export class ModalContentPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'assets/img/avatar-gollum.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'assets/img/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}


