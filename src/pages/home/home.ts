import { Component, ViewChild  } from '@angular/core';
import {  MbscFormOptions } from '@mobiscroll/angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('contactDetails')
    cd: any;

    formSettings: MbscFormOptions = {
      lang: 'fi',
      theme: 'ios'
  }

}
