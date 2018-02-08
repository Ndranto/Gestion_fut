import { Component,ViewChild } from '@angular/core';
import {Validators, FormGroup, FormBuilder } from '@angular/forms';
import {ViewController } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import {AutoCompleteService} from 'ionic2-auto-complete';
import {AutoCompleteComponent} from 'ionic2-auto-complete';
import { RestfutProvider } from '../../providers/restfut/restfut';

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
export class AjoutFutBonComponent implements AutoCompleteService{
  @ViewChild('searchbar')
  searchbar: AutoCompleteComponent;
  labelAttribute = "name";
  private Bon : FormGroup;
  public postReponse: any  = {};
  public fut:any;
  
  tags = ['Ionic', 'Angular', 'TypeScript'];
  constructor(
    public formBuilder:FormBuilder,
    public navParams :NavParams, public navCrtl : NavController,public viewcrtl :ViewController, public futCatalogue : RestfutProvider) {
    
      this.Bon = this.formBuilder.group({
        CatalogueFut: ['', Validators.required],
      /*   StockName: ['',  Validators.required],
        clientName: ['',  Validators.required],
        caractere: ['',  Validators.required],*/
       
      });
  

    }
    onChange(val){
      console.log(this.tags)
    }
    getResults(keyword:string) {
      return this.futCatalogue.getListCatalogue()
        .then(
          result =>
          {this.fut = result;
            return this.fut.filter(item => item.value.futNomCatalogueFut.toLowerCase().startsWith(keyword.toLowerCase()) )
          });
    }
    isNumeric(ev:any )
    { console.log(ev.target.value);
      const pattern = /[0-9\+\-\ ]/;
      let inputChar = String.fromCharCode(ev.charCode);
      if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        ev.preventDefault();
      }
     
    }

  }
