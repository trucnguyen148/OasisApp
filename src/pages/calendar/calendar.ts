import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Modal } from 'ionic-angular';
import { BranchesPage } from '../branches/branches';
import { HistoryBookingPage } from '../history-booking/history-booking';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

  goToBranchesPage(){
    this.navCtrl.push(BranchesPage)
  }

  goToHistoryBookingPage(){
    let myModal = this.modalCtrl.create(HistoryBookingPage);
    myModal.present();
  }

}
