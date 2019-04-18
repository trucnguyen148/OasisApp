import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
        icon: 'ios-clock-outline'
      }
    ],
    'Liquid': [
    /*WORKING LIQUID*/
      {
        title: 'Working liquids'
      },
      {
        name: 'Terms of Service',
        icon: 'create'
      },
      {
        name: 'User Guide',
        icon: 'book'
      },
    /*TREATMENT*/
      {
        title:'Traetments'
      },
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
      title:'Disinfectants'
    },
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
        icon: 'ionic'
      },
      {
        name: 'Learn Angular',
        icon: 'logo-angular'
      }
    ],
    'EquipmentBrushes': [
      {
        name: 'Ionic Framework',
        icon: 'ionic'
      },
      {
        name: 'Learn Angular',
        icon: 'logo-angular'
      }
    ]
  };

 

  getSafariItems(type: any) {
    return this.items[type];
  }

}
