import {Component, OnInit} from '@angular/core';
import {ApiServeService} from '../api-serve.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {select, Store} from '@ngrx/store';
import {State} from '../medium.reducer';
import {addEvent} from '../medium.actions';
import {Observable} from 'rxjs';

interface List {
  link: string;
  id: number;
  description: string;
  time: Date;
}

interface Data {
  uuid: string;
  arr: List[];
}


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  myData$: Observable<State>;

  constructor(private fetcher: ApiServeService, private route: Router,
              private cookieS: CookieService, private store: Store<{ state: State }>) {
    this.myData$ = this.store.pipe(select('state'));
    this.route.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.fetcher.getJsonData(this.cookieS.get('uuid')).subscribe((e: Data) => {
      if (e.arr) {
        this.data = e;
      }
    });
  }

  // @ts-ignore
  data: Data = {uuid: '', arr: []};
  displayedColumns: string[] = ['Link', 'Description'];

  ngOnInit() {
    this.myData$.subscribe(e => this.data.arr = e.arr).unsubscribe();
  }


  getData(link, description) {
    if (!link.length || !description.length) {
      alert('Fields required');
      return;
    }
    this.store.dispatch(addEvent({id: this.data.arr.length + 1, description, link}));
    this.myData$.subscribe(e => this.data.arr = e.arr).unsubscribe();
    console.log(this.data.arr);

    // this.fetcher.storeData(this.data, this.cookieS.get('uuid'));


  }

  deleteLink(index) {
    for (let i = 0; i < this.data.arr.length; i++) {
      if (this.data.arr[i].id === index) {
        this.data.arr.splice(i, 1);
        break;
      }
    }
    this.fetcher.storeData(this.data, this.cookieS.get('uuid'));

  }


}
