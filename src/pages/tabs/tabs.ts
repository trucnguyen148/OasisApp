import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CalendarPage } from '../calendar/calendar';
import { ProductsPage } from '../products/products';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CalendarPage;
  tab3Root = ProductsPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
