import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HistoryBookingPage } from '../history-booking/history-booking';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }
  employees = [];
  ionViewDidLoad() {
    this.employees = [
      {
        image: '../assets/collections/CoffeeOrTea.jpg',
        name: 'Thao Trang',
        phonenumber: '984658904865',
        service: "Nails",
        rating: "3"

      },
      {
        image: '../assets/collections/CoffeeOrTea.jpg',
        name: 'Thao Trang',
        phonenumber: '0449214167',
        service: "Nails",
        rating: "3"
      },

      {
        image: '../assets/collections/CoffeeOrTea.jpg',
        name: 'Thao Trang',
        phonenumber: '984658904865',
        service: "Nails",
        rating: "3"
      },
      {
        image: '../assets/collections/CoffeeOrTea.jpg',
        name: 'Thao Trang',
        phonenumber: '984658904865',
        service: "Nails",
        rating: "3"
      },
    ]
  }


  goToHistoryBookingPage(){
    let myModal = this.modalCtrl.create(HistoryBookingPage);
    myModal.present();
  }

}
