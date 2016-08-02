import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';

@Injectable()
export class AboutService {

  getArticle(): Observable<any> {
    const article = {
      title :'xiaomo',
      layout: 'post',
      html : "about me"
    };
    return fromPromise(Promise.resolve(article));
  }
}
