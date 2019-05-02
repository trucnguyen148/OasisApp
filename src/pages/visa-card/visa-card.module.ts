import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisaCardPage } from './visa-card';

@NgModule({
  declarations: [
    VisaCardPage,
  ],
  imports: [
    IonicPageModule.forChild(VisaCardPage),
  ],
})
export class VisaCardPageModule {}
