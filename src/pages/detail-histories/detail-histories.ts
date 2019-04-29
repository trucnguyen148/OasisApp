import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

/**
 * Generated class for the DetailHistoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-histories',
  templateUrl: 'detail-histories.html',
})
export class DetailHistoriesPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
  }

  
  closeModal(){
    this.viewCtrl.dismiss();
  }

  posts = [];
  ionViewDidLoad() {
    this.posts = [
      {
        image: '../assets/collections/CoffeeOrTea.jpg'
      },
      { 
        image: '../assets/collections/2.jpg'
      },
      {
        image: '../assets/collections/3.jpg'
      },
      {
        image: '../assets/collections/4.jpg'
      },
    ];
  }
}
