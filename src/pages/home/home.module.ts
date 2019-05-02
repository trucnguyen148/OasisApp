import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    FormsModule,
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
