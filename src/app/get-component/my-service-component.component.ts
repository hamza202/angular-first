import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-my-service-component',
  templateUrl: './my-service-component.component.html',
  styleUrls: ['./my-service-component.component.css']
})
export class MyServiceComponentComponent implements OnInit {
  users: any[] = [];
  constructor(public dataService: DataServiceService) {
    this.dataService.gitUsers().subscribe( user => {
      this.users.push(user);
    });
  }
  ngOnInit() {
  }
}

// this.dataService.gitUser().subscribe(user => {
//     this.users.push(user);
// });