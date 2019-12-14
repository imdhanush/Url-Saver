import {Component, OnInit} from '@angular/core';
import {ApiServeService} from '../api-serve.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {select, Store} from '@ngrx/store';
import {Holder, State} from '../medium.reducer';
import {addEvent, setEvent} from '../medium.actions';
import {Observable} from 'rxjs';

interface List {
  link: string;
  id: number;
  description: string;
  time: Date | number;
}

interface Data {
  // uuid: string;
  arr: List[];
}

const dummy: Holder[] = [
  {id: 1, link: '1', description: '1', time: Date.now()},
  {id: 2, link: '2', description: '2', time: Date.now()},
  {id: 3, link: '3', description: '3', time: Date.now()},
  {id: 4, link: '4', description: '4', time: Date.now()},
];

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
    this.myData$.subscribe(e => this.data.arr = e.arr);
  }

  // @ts-ignore
  data: Data = {arr: []};
  displayedColumns: string[] = ['Link', 'Description'];

  ngOnInit() {
    this.fetcher.getJsonData(this.cookieS.get('uuid')).subscribe((e: Data) => {
      console.log('Data : ', e);
      if (e.arr === undefined || e.arr === null) {
        this.store.dispatch(setEvent({data: []}));
      } else {
        this.store.dispatch(setEvent({data: e.arr}));
      }
    });
    // this.store.dispatch(setEvent({data: dummy}));
  }

  getData(link, description) {
    if (!link.length || !description.length) {
      alert('Fields required');
      return;
    }
    this.store.dispatch(addEvent({id: this.data.arr.length + 1, description, link}));
    console.log(this.data.arr);

    this.fetcher.storeData(this.data, this.cookieS.get('uuid'));

  }

  deleteLink(index) {
    for (let i = 0; i < this.data.arr.length; i++) {
      if (this.data.arr[i].id === index) {
        this.data.arr.splice(i, 1);
        break;
      }
    }
    console.log(this.data.arr);
    this.store.dispatch(setEvent({data: this.data.arr}));
    this.fetcher.storeData(this.data, this.cookieS.get('uuid'));

  }


}
