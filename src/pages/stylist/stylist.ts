import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HistoryBookingPage } from '../history-booking/history-booking';
import { OasisProvider } from '../../providers/oasis/oasis';

/**
 * Generated class for the StylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stylist',
  templateUrl: 'stylist.html',
})
export class StylistPage {

  time: any;
  date:any;
  branch_id:any;
  category_id:any;
  employees = [];
  employee_id:any;
  date_time:any;
  bookings:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,private oasisProvider:OasisProvider) {
    this.category_id = navParams.get('category_id');
    this.branch_id = navParams.get('branch_id');
    this.date = navParams.get('date');
    this.time = navParams.get('time');

    this.date_time = this.date+" "+this.time+":00";
    console.log(this.date_time);
  }

  ionViewDidLoad() {
    this.oasisProvider.getListID("employee/branch", this.branch_id).subscribe(employees => {
      this.employees = JSON.parse(employees['_body']);
      //console.log('my employees: ',  JSON.parse(employees['_body']) );
    });
  }


  goToHistoryBookingPage(id){
    this.oasisProvider.createBooking("1", id, this.date_time, '');
    this.oasisProvider.getListID("booking/1/customer", 1).subscribe(bookings => {
      this.bookings = JSON.parse(bookings['_body']);
      //console.log('my bookings: ',  JSON.parse(bookings['_body']))
      this.navCtrl.push(HistoryBookingPage,{
        bookings: this.bookings
      });
    });
  }

}
