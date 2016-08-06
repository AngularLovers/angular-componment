import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class GoodBlogService {

  constructor(private http: Http) {
  }

  getGoodBlogItems(): any {
    return this.items;
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  items = [
    {
      "id": "1",
      "name": "徐子凌的博客",
      "url":"http://baidu.com",
      "date": "2016-05-11",
      "summary": "吉日柑星罗棋布时戈是星罗棋布中里边"
    },
    {
      "id": "2",
      "name": "徐子凌的博客",
      "url":"http://baidu.com",
      "date": "2016-05-11",
      "summary": "吉日柑星罗棋布时戈是星罗棋布中里边"
    },
    {
      "id": "3",
      "name": "徐子凌的博客",
      "url":"http://baidu.com",
      "date": "2016-05-11",
      "summary": "吉日柑星罗棋布时戈是星罗棋布中里边"
    },
    {
      "id": "4",
      "name": "徐子凌的博客",
      "url":"http://baidu.com",
      "date": "2016-05-11",
      "summary": "吉日柑星罗棋布时戈是星罗棋布中里边"
    },
    {
      "id": "5",
      "name": "徐子凌的博客",
      "url":"http://baidu.com",
      "date": "2016-05-11",
      "summary": "吉日柑星罗棋布时戈是星罗棋布中里边"
    }
  ]


}
