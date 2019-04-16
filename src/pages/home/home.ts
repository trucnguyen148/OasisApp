import { Component } from '@angular/core';
import {  MbscFormOptions } from '@mobiscroll/angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    formSettings: MbscFormOptions = {
      lang: 'fi',
      theme: 'ios'
  }
  
}
