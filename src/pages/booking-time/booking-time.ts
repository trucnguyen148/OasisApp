import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StylistPage } from '../stylist/stylist';


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
  time: any;
  date:any;
  branch_id:any;
  category_id:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //Pick Date

    // this.date=  new Date().toISOString();
    // this.time=  new Date().toISOString();

    this.category_id = navParams.get('category_id');
    this.branch_id = navParams.get('branch_id');
  }

  compareFn(option1: any, option2: any) {
    return option1.value === option2.value;
}


  /*
  BOOKING BUTTON
  */
 goToStylistPage(){
   this.navCtrl.push(StylistPage,{
     branch_id: this.branch_id,
     category_id: this.category_id,
     time: this.time,
     date: this.date
   });
 }




}
