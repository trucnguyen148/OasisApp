import { Component } from '@angular/core';
import {  MbscFormOptions } from '@mobiscroll/angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fixedSettings: any = {
    theme: 'android',
    layout: 'fixed',
    itemWidth: 80
}


  
    
    formSettings: MbscFormOptions = {
      lang: 'fi',
      theme: 'ios'
  }
  
}
