import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingTimePage } from './booking-time';

@NgModule({
  declarations: [
    BookingTimePage,
  ],
  imports: [
    IonicPageModule.forChild(BookingTimePage),
  ],
})
export class BookingTimePageModule {}
