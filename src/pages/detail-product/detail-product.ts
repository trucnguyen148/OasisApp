import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ViewState } from '@angular/core/src/view';
/**
 * Generated class for the DetailProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-product',
  templateUrl: 'detail-product.html',
})
export class DetailProductPage {
  safari = 'Shared Links';
  items: any = {
    'NailsPolish': [
      {
        name: 'Favorites',
        price: '20'
      },
      {
        name: 'History',
        price: '20'
      }
    ],
    'Liquid': [
    /*WORKING LIQUID*/
      
      {
        name: 'Terms of Service Terms of Service Terms of Service Terms of Service Terms of Service',
        price: '20'
      },
      {
        name: 'User Guide',
        price: '20'
      },
    /*TREATMENT*/
      
      {
        name: 'Favorites',
        price: '20'
      },
      {
        name: 'Favorites',
        price: '20'
      },
      {
        name: 'Favorites',
        price: '20'
      },
    /*DISINFECTANTS*/
    
    {
      name: 'Favorites',
      price: '20'
    },
    {
      name: 'Favorites',
      price: '20'
    },
    {
      name: 'Favorites',
      price: '20'
    },
    ],
    'Accessories': [
      {
        name: 'Ionic Framework',
        price: 'ionic'
      },
      {
        name: 'Learn Angular',
        price: 'logo-angular'
      }
    ],
    'EquipmentBrushes': [
      {
        name: 'Ionic Framework',
        price: 'ionic'
      },
      {
        name: 'Learn Angular',
        price: 'logo-angular'
      }
    ]
  };

  getSafariItems(type: any) {
    return this.items[type];
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtr: ViewController) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('name'));
  }

  closeModal(){
    this.viewCtr.dismiss();
  }

}
