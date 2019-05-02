import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmPage } from '../confirm/confirm';
import { OasisProvider } from '../../providers/oasis/oasis';
import { CartProvider } from '../../providers/cart/cart';


@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  products = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private oasisProvider:OasisProvider,
    public cartProvider:CartProvider
  ) {
  }

  ionViewDidLoad() {
    this.products.push(this.cartProvider.addedItems);
    console.log(this.products[0]);
  }
  goToConfirmPage(){
    this.navCtrl.push(ConfirmPage);
  }



}
