import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { CalendarPage } from '../pages/calendar/calendar';
import { ProductsPage } from '../pages/products/products';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { FirstPage } from '../pages/first/first';
import { SecondPage } from '../pages/second/second';
import { ThirdPage } from '../pages/third/third';
import { FourPage } from '../pages/four/four';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CalendarPage,
    ProductsPage,
    ProfilePage,
    LoginPage,
    SignupPage,
    FirstPage,
    SecondPage,
    ThirdPage,
    FourPage,
    TabsPage
  ],
  imports: [ 
    MbscModule, 
    FormsModule, 
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CalendarPage,
    ProductsPage,
    ProfilePage,
    LoginPage,
    SignupPage,
    FirstPage,
    SecondPage,
    ThirdPage,
    FourPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
