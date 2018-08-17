import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../service/http-service.service';

@Component({
  selector: 'app-http-component',
  templateUrl: './http-component.component.html',
  styleUrls: ['./http-component.component.css']
})
export class HttpComponentComponent implements OnInit {
  users: any[] = [];
  constructor(public httpService: HttpServiceService) {
    this.httpService.getConfig().subscribe(usser => {
      this.users.push(usser);
      console.log(this.users);
    });

  }

  ngOnInit() {
  }

}
