import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryBookingPage } from './history-booking';

@NgModule({
  declarations: [
    HistoryBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryBookingPage),
  ],
})
export class HistoryBookingPageModule {}
