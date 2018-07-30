import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service'; // import our service
import * as _ from 'lodash';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MainService]
})
export class LoginComponent implements OnInit {
  
  public item;
  public items;
  public totalAmount:number;


  constructor(private _userService: MainService) { 
    this.item = {};
    this.items = [];
    this.totalAmount;
  }

  ngOnInit() {
    this.getUserData();
  }

  addItem() {
    this._userService.addItem(this.item).subscribe((data) => { //use methods in our service
      console.log(data);
      this.getUserData();
    }, (err) => {
      alert('error');
      console.log(err);
    });
    // var abc = _.join(['a', 'b', 'c'], '~');
    // console.log(abc);

  }

  getUserData(){
    this._userService.getJsonData().subscribe((data) => { //use methods in our service
      // debugger;
      this.items = data;
      var total = 0;
      let totalCount = 0;
      for(var i = 0; i < this.items.length; i++){
        totalCount = parseInt(this.items[i].amount) + totalCount;
        this.totalAmount = totalCount;
        
        // debugger;
      }
      this.totalAmount;
    }, (err) => {
      // debugger;
      err;
    });
  }

}
