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
  current_url;
  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://oasisvn.tk/api/';
    
  }

    getList(listname){
        
          return this.http.get(this.url+listname);
           
    }
    
  

}
