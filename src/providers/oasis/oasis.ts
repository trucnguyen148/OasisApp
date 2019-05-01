import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the OasisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OasisProvider {
  url;
  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://oasisvn.tk/api/';

  }

  getList(listname){
    return this.http.get(this.url+listname);
  }

  getListID(listname, id){
    return this.http.get(this.url+listname+"/"+id);
  }

  //id1: customer, employee, etc
  //id2: id of customer, id of employee, etc
  geListIDinID(listname, id1, id2){
    return this.http.get(this.url+listname+"/"+id1+"/"+id2);
  }



}
