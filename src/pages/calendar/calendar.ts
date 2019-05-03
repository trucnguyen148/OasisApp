import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Modal } from 'ionic-angular';
import { BranchesPage } from '../branches/branches';
import { HistoryBookingPage } from '../history-booking/history-booking';
import { OasisProvider } from '../../providers/oasis/oasis';

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  bookings:any;
  id = 1;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private oasisProvider:OasisProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

  goToBranchesPage(id){
    this.navCtrl.push(BranchesPage, {
      category_id: id
    });
  }

  goToHistoryBookingPage(id){
    this.oasisProvider.getListID("booking/1/customer", id).subscribe(bookings => {
      this.bookings = JSON.parse(bookings['_body']);
      //console.log('my bookings: ',  JSON.parse(bookings['_body']))
      this.navCtrl.push(HistoryBookingPage,{
        bookings: this.bookings
      });
    });
    // let myModal = this.modalCtrl.create(HistoryBookingPage);
    // myModal.present();
  }

}
