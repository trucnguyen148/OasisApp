import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BookingTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking-time',
  templateUrl: 'booking-time.html',
})
export class BookingTimePage {
  timeAlertOpts: any;
  timeData: any;
  times: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.timeAlertOpts = {
      title: 'Select your country code',
    };
    this.timeData = [
      { time: '8:00 - 8:30', value: '' },
      { time: '8:30 - 9:00', value: '' },
      { time: '9:00 - 9:30', value: '' },
      
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingTimePage');
  }

}
