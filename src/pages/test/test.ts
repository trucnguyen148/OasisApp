import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { OasisProvider } from '../../providers/oasis/oasis';
/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  products:any;

  constructor(
    public navCtrl: NavController,
    private weatherProvider:OasisProvider,
    private platform:Platform) {

  }

  ionViewWillEnter(){
    this.platform.ready().then(() => {

      // this.geolocation.getCurrentPosition().then(resp => {
        // this.latitude = resp.coords.latitude;
        // this.longitude = resp.coords.longitude;
        // this.weatherProvider.getCurrentWeather(this.latitude, this.longitude).subscribe(current_weather => {
        //   this.location = {
        //     city: current_weather.location.city,
        //     state: current_weather.location.country
        //   }

        // });

        this.weatherProvider.getList("products").subscribe(products => {
          this.products = products;
        });

      });
    };
}
