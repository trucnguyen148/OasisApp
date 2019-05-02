import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the HistoryBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history-booking',
  templateUrl: 'history-booking.html',
})
export class HistoryBookingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  schedules = [];
  ionViewDidLoad() {
    this.schedules = [
      { 
        service: 'Nails'
      },
      { 
        service: 'Eyebrown'
      }
    ]
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }

}
