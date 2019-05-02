import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingTimePage } from '../booking-time/booking-time';

/**
 * Generated class for the BranchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-branches',
  templateUrl: 'branches.html',
})
export class BranchesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  branches = [];
  ionViewDidLoad() {
    this.branches = [
      {
        image: '../assets/collections/CoffeeOrTea.jpg',
        name: 'Quang Trung',
        address: '317 Quang Trung, P.11, Q.Go vap, Tp.HCM',
        phonenumber: '984658904865'
      },
      {
        image: '../assets/collections/CoffeeOrTea.jpg',
        name: 'Quang Trung',
        address: '317 Quang Trung, P.11, Q.Go vap, Tp.HCM'
      },
      {
        image: '../assets/collections/CoffeeOrTea.jpg',
        name: 'Quang Trung',
        address: '317 Quang Trung, P.11, Q.Go vap, Tp.HCM'
      },
      {
        image: '../assets/collections/CoffeeOrTea.jpg',
        name: 'Quang Trung',
        address: '317 Quang Trung, P.11, Q.Go vap, Tp.HCM'
      },
    ]
  }

  goToBookingTimePage(){
    this.navCtrl.push(BookingTimePage);
  }
}