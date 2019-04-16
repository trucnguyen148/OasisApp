import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  userInfo: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  register(){
    (<any>window).AccountKitPlugin.loginWithPhoneNumber({
      useAccessToken: true,
      defaultCountryCode: "IN",
      facebookNotificationsEnabled: true,
    }, data => {
      (<any>window).AccountKitPlugin.getAccount(
        info => this.userInfo = info,
        err => console.log(err)
      );
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
