import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  formName = '';
  formLname = '';
  formAge: number;
    // myArray = ['hamzz' , 'welcome'];

    // submitFunction() {
    //   this.myArray.push(this.formName);
    //   this.formName = '';
    // }
  constructor() { }

  ngOnInit() {
  }

}

$(function () {
    $('[data-toggle="popover"]').popover();
});
