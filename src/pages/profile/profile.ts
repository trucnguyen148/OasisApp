import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DetailHistoriesPage } from '../detail-histories/detail-histories';
import { OasisProvider } from '../../providers/oasis/oasis';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profile:any;
  bookings:any;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private oasisProvider:OasisProvider,
  ) {
  }


  goToDetailPage(id){
    this.navCtrl.push(DetailHistoriesPage,{
      booking_id: id
    });
  }

  ionViewWillEnter(){
    this.oasisProvider.getListID("customer", 1).subscribe(profile => {
      this.profile = JSON.parse(profile['_body']);
      //console.log('my profile: ',  JSON.parse(profile['_body']) )
    });

    this.oasisProvider.geListIDinID("booking","customer",1).subscribe(bookings => {
      this.bookings = JSON.parse(bookings['_body']);
      //console.log('my bookings: ',  JSON.parse(bookings['_body']) )
    });
  };

}
