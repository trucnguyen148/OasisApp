import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { DetailProductPage } from '../detail-product/detail-product';
import { CartPage } from '../cart/cart';
import { OasisProvider } from '../../providers/oasis/oasis';
import { CartProvider } from '../../providers/cart/cart';

@IonicPage(
)
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',

})

export class ProductsPage {

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private oasisProvider:OasisProvider,
    public cartProvider:CartProvider

  ){

  }

  id:any;
  products:any;
  product:any;

  getCategoryID(id:any){
    this.id = id;
    this.oasisProvider.getListID("product/category", this.id).subscribe(products => {
      this.products = JSON.parse(products['_body']);
      //console.log('my products: ',  JSON.parse(products['_body']) )
    });
  }

  addToCart(product_id){
    this.oasisProvider.getListID("product", product_id).subscribe(product => {
      this.product = JSON.parse(product['_body']);
      //console.log('my product: ',  JSON.parse(product['_body']) );

      this.cartProvider.addItem(this.product);
    });
  }

  goToDetailPage(){
    let myModal = this.modalCtrl.create(DetailProductPage);
    myModal.present();
  }

  goToCartPage(){
    this.navCtrl.push(CartPage);
  }



}
