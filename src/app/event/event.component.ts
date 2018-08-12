import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
    trueStatus = true;
    toggleFunction() {
      if (this.trueStatus === true) {
        return this.trueStatus = false;
      } else {
        this.trueStatus = true;
      }
    }
  constructor() {
      this.toggleFunction();
  }

  ngOnInit() {
  }

}
