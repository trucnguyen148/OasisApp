import { Component } from '@angular/core';
import {  MbscFormOptions } from '@mobiscroll/angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
/*
    formSettings: MbscFormOptions = {
      lang: 'fi',
      theme: 'ios'
  }
*/

safari = 'Shared Links';
  items: any = {
    'Nails': [
      {
        name: 'Favorites',
        icon: 'ios-star-outline'
      },
      {
        name: 'History',
        icon: 'ios-clock-outline'
      }
    ],
    'Eyelasher': [
      {
        name: 'Terms of Service',
        icon: 'create'
      },
      {
        name: 'User Guide',
        icon: 'book'
      }
    ],
    'Tattoo': [
      {
        name: 'Ionic Framework',
        icon: 'ionic'
      },
      {
        name: 'Learn Angular',
        icon: 'logo-angular'
      }
    ],

    'Courses': [
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
