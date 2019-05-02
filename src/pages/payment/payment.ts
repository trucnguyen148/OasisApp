import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MasterCardPage } from '../master-card/master-card';
import { VisaCardPage } from '../visa-card/visa-card';
import { PaypalPage } from '../paypal/paypal';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  goToMasterCardPage(){
    let myModal = this.modalCtrl.create(MasterCardPage);
    myModal.present();
  }

  goToVisaCardPage(){
    let myModal = this.modalCtrl.create(VisaCardPage);
    myModal.present();
  }

  goToPaypalPage(){
    let myModal = this.modalCtrl.create(PaypalPage);
    myModal.present();
  }

}
