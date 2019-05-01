import { Component } from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

priceList = 'Nails';
  items: any = {
    'Nails': [
  /* Natural Nails Treatment*/
      {
        title: 'Natural Nails Treatment'
      },
      {
        name: 'Gel Polish Manicure',
        price: '€25'
      },
      {
        name: 'The Classic Manicure',
        price: '€10'
      },
      {
        name: 'The Deluxe Manicure',
        price: '€20'
      },
      {
        name: 'The New Signature Manicure ',
        price: '€28'
      },
      {
        name: 'Hollywood Gel Polish Manicure',
        price: '€48'
      },
/* Nails Enhancement */
      {
        title:'Nails Enhancement'
      },
      {
        name: 'Acrylic Overlay',
        price: '€25+'
      },
      {
        name: 'Gel Nails',
        price: '€35+'
      },
      {
        name: 'Silk Wrap',
        price: '€40+'
      },
      {
        name: 'Solar Nails (Pink & White)',
        price: '€45+'
      },
      {
        name: 'Diamond Nails',
        price: '€45+'
      },
      {
        name: 'French Color Tip',
        price: 'Add €5+'
      },

/* Add on service */
      {
        title: 'Add on service'
      },
      {
        name: 'Take Off Enhance Nails',
        price: '€10'
      },
      {
        name: 'Soak Off Gel Polish only',
        price: '€5'
      },
      {
        name: 'French/ Color Tips',
        price: '€5'
      },
      {
        name: 'Nails Repair',
        price: '€3+'
      },
      {
        name: 'Nails Buffing',
        price: '€3'
      },
      {
        name: 'Design Nails on Toe',
        price: '€5+'
      },
      {
        name: 'Polish change',
        price: '€10'
      },


    ],

    'Eyelasher': [
      {
        name: '1',
        price: '€25'
      },
      {
        name: '2',
        price: '€25'
      },
      {
        name: '3',
        price: '€25'
      },
      {
        name: '4',
        price: '€25'
      },

      
    ],
    'Tattoo': [
      {
        name: '5',
        price: '€25'
      },
      {
        name: '6',
        price: '€25'
      },
      {
        name: '7',
        price: '€25'
      },
      {
        name: '8',
        price: '€25'
      },
    ],

    'Courses': [
      {
        name: ' 9',
        price: '€25'
      },
      {
        name: '10',
        price: '€25'
      },
      {
        name: '11',
        price: '€25'
      },
      {
        name: '12',
        price: '€25'
      },
    ]
  };

  getPriceListItems(type: any) {
    return this.items[type];
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
