import { Component } from '@angular/core';
import { OasisProvider } from '../../providers/oasis/oasis';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private oasisProvider:OasisProvider,
  ){
    this.getCategoryID(5);
  }

  id = 5;
  products:any;

  getCategoryID(id:any){
    this.id = id;
    this.oasisProvider.getListID("product/category", this.id).subscribe(products => {
      this.products = JSON.parse(products['_body']);
      //console.log('my products: ',  JSON.parse(products['_body']) )
    });
  }

  getPriceListItems(type: any) {
    //return this.items[type];
  }

  posts = [];
  deals=[];

  ionViewDidLoad() {
    

    this.deals = [
      {
        image: '../assets/imgs/Hotdeal2.png'
      },
      {
        image: '../assets/imgs/Hotdeal1.png'
      },
      {
        image: '../assets/imgs/Hotdeal1.png'
      },
    ]
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
      {
        image: '../assets/collections/5.jpg'
      },
      {
        image: '../assets/collections/6.jpg'
      },
      {
        image: '../assets/collections/7.jpg'
      },
      {
        image: '../assets/collections/8.jpg'
      },
      {
        image: '../assets/collections/9.jpg'
      },
      {
        image: '../assets/collections/10.jpg'
      },
      {
        image: '../assets/collections/11.jpg'
      },
      {
        image: '../assets/collections/12.jpg'
      },
      {
        image: '../assets/collections/13.jpg'
      },
      {
        image: '../assets/collections/14.jpg'
      },
    ];

  }

}
