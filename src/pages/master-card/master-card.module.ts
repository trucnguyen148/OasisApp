import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasterCardPage } from './master-card';

@NgModule({
  declarations: [
    MasterCardPage,
  ],
  imports: [
    IonicPageModule.forChild(MasterCardPage),
  ],
})
export class MasterCardPageModule {}
