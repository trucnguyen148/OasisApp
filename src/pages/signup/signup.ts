import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ValidatePage } from '../validate/validate';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  countrycodeAlertOpts: any;
  countrycodeData: any;
  countrycodes: Array<string>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.countrycodeAlertOpts = {
      title: 'Select your country code',
    };
    this.countrycodeData = [
      { code: 'VN', value: '+84' },
      { code: 'FI', value: '+358' },
      { code: 'US', value: '+001' },
      
    ];
  }
  goToValidatePage(){
    this.navCtrl.push(ValidatePage);
  }

}
