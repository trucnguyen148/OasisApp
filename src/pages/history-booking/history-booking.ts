import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { OasisProvider } from '../../providers/oasis/oasis';

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
  bookings =[];
  emp_name =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private oasisProvider:OasisProvider) {
    this.bookings = navParams.get('bookings');
    console.log(this.bookings);
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }
}
