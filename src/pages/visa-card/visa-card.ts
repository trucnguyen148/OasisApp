import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

/**
 * Generated class for the VisaCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visa-card',
  templateUrl: 'visa-card.html',
})
export class VisaCardPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisaCardPage');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
