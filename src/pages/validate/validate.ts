import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ValidatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-validate',
  templateUrl: 'validate.html',
})
export class ValidatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidatePage');
  }
  async goToConfirmPage() {
    const alert = await this.alertController.create({
      
      message: 'Welcome to family of OASIS',
      buttons: ['OK']
    });

    await alert.present();
  }
}
