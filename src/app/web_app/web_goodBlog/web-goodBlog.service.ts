import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class GoodBlogService {

  constructor(private http: Http) {
  }

  getGoodBlogItems(): any {
    return this.http.get('mocks/blog/web-goodBlog.json')
      .toPromise()
      .then(response=> {
        return response.json();
      }).catch(this.handleError)
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
