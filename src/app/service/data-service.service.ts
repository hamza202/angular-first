import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataServiceService {
    data: Observable<any>;

    constructor() {}
    gitUsers() {
        this.data = new Observable( myObserve => {
           setTimeout(() => {
               myObserve.next('hamza');
           }, 1000) ;
            setTimeout(() => {
                myObserve.next('hamza');
            }, 2000) ;
            setTimeout(() => {
                myObserve.next('hamza');
            }, 3000) ;
            setTimeout(() => {
                myObserve.next('hamza');
            }, 4000) ;
        });
        return this.data;
    }
}


// this.data = new Observable(observer => {
//     setTimeout(() => {
//         observer.next('hamza');
//     }, 1000);
//     setTimeout(() => {
//         observer.next('khames');
//     }, 2000);
//     setTimeout(() => {
//         observer.next('mahmoud');
//     }, 3000);
//     setTimeout(() => {
//         observer.next('Aboaitah');
//     }, 4000);
// });
// return this.data;

// this.user = ['hamza', 'ahmed' , 'welcom'];
// return this.user;
