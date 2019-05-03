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

  test(id){
    console.log("Product id:"+id);
    console.log(this.products[0]);
  }

  ionViewDidLoad() {
    this.products.push(this.cartProvider.addedItems);
  }
  goToConfirmPage(){
    this.navCtrl.push(ConfirmPage);
  }
  // delete(product){
  //   this.products = this.products.filter(i => i.title != product.title);
  // }


}
