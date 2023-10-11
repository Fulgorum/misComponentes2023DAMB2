import {Component, OnInit} from '@angular/core';
import {timeout} from "rxjs";
import {load} from "@angular-devkit/build-angular/src/utils/server-rendering/esm-in-memory-file-loader";

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  data: any;

  constructor() {
  }

  ngOnInit() {
  }

  load(event: any) {
    setTimeout(() => {
      const nuevoArr: any[] = Array(20);
      this.data.push(...nuevoArr);
      event.target.complete();
      timeout(1500);
    })
  }

  protected readonly load = load;
  protected readonly load = load;
}
