import {Component, OnInit} from '@angular/core';
import {ApiServeService} from '../api-serve.service';
import {Router} from '@angular/router';


interface List {
  link: string;
  id: number;
  description: string;
  time: number;
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

  constructor(private fetcher: ApiServeService, private route: Router) {
    this.route.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.fetcher.getJsonData().subscribe((e: Data) => {
      this.data = e;
    });
  }

  // data: Data = {arr: [{link: 'some', description: 'some'}]};
  data: Data = {uuid : '', arr: []};
  displayedColumns: string[] = ['Link', 'Description'];

  ngOnInit() {

  }


  getData(link, description) {
    if (!link.length || !description.length) {
      alert('Fields required');
      return;
    }
    // @ts-ignore
    this.data.arr.push({id: this.data.arr.length, link, description, time: Math.round(new Date() / 1000)});
    console.log(this.data.arr);

    // this.fetcher.getJson();
    this.fetcher.storeData(this.data);

    this.timeoutReload(1000);

  }

  deleteLink(index) {
    this.data.arr.splice(index, 1);

    this.fetcher.storeData(this.data);

    this.timeoutReload(1000);
  }

  timeoutReload(time) {
    setTimeout(() => {
      this.route.navigated = false;
      this.route.navigate(['/']).then().catch();
    }, time);
  }


}
