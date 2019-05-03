import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingTimePage } from '../booking-time/booking-time';
import { OasisProvider } from '../../providers/oasis/oasis';

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
  category_id:any;
  branches = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private oasisProvider:OasisProvider,
) {
    this.category_id = navParams.get('category_id');
  }


  ionViewDidLoad() {
    this.oasisProvider.getList("branches").subscribe(branches => {
      this.branches = JSON.parse(branches['_body']);
      //console.log('my branches: ',  JSON.parse(branches['_body']) );
    });
  }

  goToBookingTimePage(branch_id){
    this.navCtrl.push(BookingTimePage, {
      category_id: this.category_id,
      branch_id: branch_id
    });

  }
}
