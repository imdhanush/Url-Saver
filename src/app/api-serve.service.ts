import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServeService {
  constructor(private http: HttpClient) {
  }

  fetchUrl = 'https://jsonplaceholder.typicode.com/todos/1';
  // backendUrl = 'http://localhost:3000';

  backendUrl = 'https://my-saver.herokuapp.com';

  private static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      `${error.message}`);
  }

  getJsonData(uuid: string) {
    return this.http.get(this.backendUrl + `/api/data?uuid=${uuid}`, {
      responseType: 'json'
    }).pipe(
      catchError(ApiServeService.handleError)
    );
  }

  storeData(Data, uuid: string) {
    this.http.post(this.backendUrl + '/api/store', {uuid, data: Data}, {responseType: 'text'}).pipe(
      catchError(ApiServeService.handleError)
    ).subscribe((r) => console.log('YES'));
  }

  loginAction(email: string, password: string) {
    return this.http.post(this.backendUrl + '/login', {email, password}, {responseType: 'json'}).pipe(
      catchError(ApiServeService.handleError)
    );
  }
}

