import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductsPage } from './products';

@NgModule({
  declarations: [
    ProductsPage,
  ],
  imports: [
    FormsModule,
    IonicPageModule.forChild(ProductsPage),
  ],
})
export class ProductsPageModule {}
