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

  // createBooking(cus_id, emp_id, date_time, note){
  //
  // }

  createBranch(phone, address, name){
    let postData = new FormData();
    postData.append('name', name);
    postData.append('address', address);
    postData.append('phone', phone);

    this.http.post(this.url+'branch/create', postData).subscribe(data =>{
      console.log(data);
    });

  }

  createBooking(cus_id, emp_id, date_time, note){
    let postData = new FormData();
    postData.append('cus_id', cus_id);
    postData.append('emp_id', emp_id);
    postData.append('date_time', date_time);
    postData.append('note', note);

    this.http.post(this.url+'booking/create', postData).subscribe(data =>{
      console.log(data);
    });

  }

}
