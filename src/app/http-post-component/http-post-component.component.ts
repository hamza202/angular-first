import {Component, OnInit} from '@angular/core';
import { HttpServiceService } from '../service/http-service.service';

@Component({
    selector: 'app-http-post-component',
    templateUrl: './http-post-component.component.html',
    styleUrls: ['./http-post-component.component.css']
})
export class HttpPostComponentComponent implements OnInit {
    getUsers: any[] = [] ;
    users = [{
        id: '' ,
        name: '' ,
        username: '',
        email: ''
    }];
    my: any[] ;
    constructor(public httpService: HttpServiceService) {
        this.httpService.getConfig().subscribe(users => {
           this.getUsers.push(users) ;
        });
    }
    MySubmit() {
        this.httpService.addUser(this.users).subscribe(user => {
            this.getUsers.push(user);
            for ( let i = 0 ; i <= this.getUsers.length ; i++) {
                console.log(this.getUsers[i]) ;
            }
        });
    }
        deleteUser(id) {
            this.httpService.deleteid(id).subscribe(res => {
                for (let i = 0 ; i < this.getUsers.length ; i++ ) {
                    if (this.getUsers[i].id === id) {
                        this.getUsers.slice(i , 1);
                    }
                }

            });
        }
    ngOnInit() {
    }

}
