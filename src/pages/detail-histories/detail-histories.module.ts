import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailHistoriesPage } from './detail-histories';

@NgModule({
  declarations: [
    DetailHistoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailHistoriesPage),
  ],
})
export class DetailHistoriesPageModule {}
