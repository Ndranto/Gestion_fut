import { Component } from '@angular/core';

/**
 * Generated class for the AjoutFutBonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ajout-fut-bon',
  templateUrl: 'ajout-fut-bon.html'
})
export class AjoutFutBonComponent {

  text: string;

  constructor() {
    console.log('Hello AjoutFutBonComponent Component');
    this.text = 'Hello World';
  }

}
