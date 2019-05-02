import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoryBookingPage } from '../history-booking/history-booking';

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
  timeData: any;
  times: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.timeData = [
      { time: '8:00 - 8:30', value: '8:00 - 8:30' },
      { time: '8:30 - 9:00', value: '' },
      { time: '9:00 - 9:30', value: 'black' },
      { time: '9:30 - 10:00', value: 'red' }
  ];

  // Pre-selected object with different object reference      
  this.times = { time: '8:00 - 8:30', value: '' };

    
  }

  compareFn(option1: any, option2: any) {
    return option1.value === option2.value;
}

  employees = [];
  ionViewDidLoad() {
    this.employees = [
      {
        img: '../assets/employees/per1.png',
        name: 'Quang Trung',
        rating: '3'
      },
      {
        img: '../assets/flags/vietnam.png',
        name: 'Quang Trung',
        rating: '3'
      },
      {
        img: '../assets/flags/finland.png',
        name: 'Quang Trung',
        rating: '3'
      }
    ]
  }

  /* 
  BOOKING BUTTON
  */
 goToHistoryBookingPage(){
   this.navCtrl.push(HistoryBookingPage);
 }
  

}
