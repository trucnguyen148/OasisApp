import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { DetailProductPage } from '../detail-product/detail-product';
import { CartPage } from '../cart/cart';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
)
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',

})

export class ProductsPage {
  /*segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }*/
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

  constructor(public navCtrl: NavController, public modalCtrl: ModalController){

  }
  goToDetailPage(){
    let myModal = this.modalCtrl.create(DetailProductPage);
    myModal.present();
  }

  goToCartPage(){
    this.navCtrl.push(CartPage);
  }
}
