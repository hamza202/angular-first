import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
    configUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(public  http: HttpClient) {}
    getConfig() {
        return this.http.get(this.configUrl).pipe(map(res => res ));
    }
    addUser(user) {
        return this.http.post('https://jsonplaceholder.typicode.com/users', user , httpOptions).pipe(map(res => res ));
    }
    deleteid(id) {
        return this.http.delete('https://jsonplaceholder.typicode.com/users/' + id , httpOptions ).pipe(map(res => res ));
    }
}
