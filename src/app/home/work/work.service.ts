import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class WorkService {

  constructor(public http:Http) {
  }

  getData() {
    return this.http.get('/app/home/work/data.json')
      .map(res => res.json());
  }
}
