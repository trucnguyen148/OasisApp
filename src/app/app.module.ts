import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { NgModule, ErrorHandler,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { DetailProductPage } from '../pages/detail-product/detail-product';
import { CartPage } from '../pages/cart/cart';
import { ConfirmPage } from '../pages/confirm/confirm';
import { PaymentPage } from '../pages/payment/payment';
import { MasterCardPage } from '../pages/master-card/master-card';
import { VisaCardPage } from '../pages/visa-card/visa-card';
import { PaypalPage } from '../pages/paypal/paypal';
import { DetailHistoriesPage } from '../pages/detail-histories/detail-histories';
import { BranchesPage } from '../pages/branches/branches';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BookingTimePage } from '../pages/booking-time/booking-time';
import { ValidatePage } from '../pages/validate/validate';
import { HistoryBookingPage } from '../pages/history-booking/history-booking';
import { OasisProvider } from '../providers/oasis/oasis';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CalendarPage,
    ProductsPage,
    ProfilePage,
    LoginPage,
    SignupPage,
    CartPage,
    ConfirmPage,
    PaymentPage,
    MasterCardPage,
    VisaCardPage,
    PaypalPage,
    DetailHistoriesPage,
    DetailProductPage,
    BranchesPage,
    BookingTimePage,
    HistoryBookingPage,
    ValidatePage,
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
    DetailProductPage,
    CartPage,
    ConfirmPage,
    PaymentPage,
    MasterCardPage,
    VisaCardPage,
    PaypalPage,
    DetailHistoriesPage,
    BranchesPage,
    BookingTimePage,
    HistoryBookingPage,
    ValidatePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OasisProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
