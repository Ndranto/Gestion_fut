import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BonPage } from './bon';

@NgModule({
  declarations: [
    BonPage,
  ],
  imports: [
    IonicPageModule.forChild(BonPage),
  ],
})
export class BonPageModule {}
