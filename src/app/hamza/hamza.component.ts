import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamza',
  templateUrl: './hamza.component.html',
  styleUrls: ['./hamza.component.css']
})
export class HamzaComponent implements OnInit {
  person: Persons[] ;
  name = 'hamza';
  public img_src = 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg'
  nameStats = 3;
  TotalClass = {};
  firstClass = true;
  secondCLass = true;
  birthday = new Date(1990 , 25 , 10);
  ClassFunction() {
      this.TotalClass = {
          redColor: this.firstClass,
          bigSize: this.secondCLass
      };
  }
  constructor() {
      this.ClassFunction();
      this.person = [{
          name: 'hamza',
          lname: 'abo aitah',
          age: 25
      },
          {
          name: 'ahmed',
          lname: 'abo aitah',
          age: 25
      }];
  }

  ngOnInit() {

  }


}
interface Persons {
    name: string ,
    lname:string ,
    age:number
}

