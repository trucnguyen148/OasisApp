import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { OasisProvider } from '../../providers/oasis/oasis';

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
  booking:any;
  booking_id:any;
  emp_id:any;
  emp_info:any;
  product:any;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    private oasisProvider:OasisProvider,
    public navParams: NavParams
  ) {
    this.booking_id = navParams.get('booking_id');
    //console.log("You just search " + this.booking_id);

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

  ionViewWillEnter(){
      this.oasisProvider.getListID("booking", this.booking_id).subscribe(booking => {
        this.booking = JSON.parse(booking['_body']);
        this.emp_id = this.booking['emp_id'];
        // console.log('my new booking: ',  JSON.parse(booking['_body']) );
        // console.log('my emp id: ',  this.emp_id );

        this.oasisProvider.getListID("employee", this.emp_id).subscribe(emp_info => {
          this.emp_info = JSON.parse(emp_info['_body']);
           //console.log('my new emp_info: ',  JSON.parse(emp_info['_body']) )
        });
      });

      this.oasisProvider.getListID("product/booking", this.booking_id).subscribe(product => {
        this.product = JSON.parse(product['_body']);
         //console.log('my new product: ',  JSON.parse(product['_body']) )
      });

  };
}
