import {Component, OnInit} from '@angular/core';
import {ApiServeService} from '../api-serve.service';


interface List {
  link: string;
  description: string;
  time: number;
}

interface Data {
  arr: List[];
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private fetcher: ApiServeService) {

  }

  // data: Data = {arr: [{link: 'some', description: 'some'}]};
  data: Data = {arr: []};
  displayedColumns: string[] = ['Link', 'Description'];

  ngOnInit() {
  }


  getData(link, description) {
    if (!link.length || !description.length) {
      alert('Fields required');
      return;
    }
    // @ts-ignore
    this.data.arr.push({link, description, time: Math.round(new Date() / 1000)});
    console.log(this.data.arr);

    // this.fetcher.getJson();

  }


}
