import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CartProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartProvider {
  public addedItems =[];
  constructor(public http: Http) {
  }

  addItem(item) {
    this.addedItems.push(item);
    //console.log(this.addedItems);
  }
}