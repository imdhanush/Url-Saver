import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServeService {

  fetchUrl = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(private http: HttpClient) {
  }

  getJson() {
    this.http.get(this.fetchUrl).subscribe((data: any) => {
      console.log(data);
    });
  }
}
