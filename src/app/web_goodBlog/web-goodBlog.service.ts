import { Injectable } from '@angular/core';
import { Http ,Response} from "@angular/http";
import { Observable } from "rxjs";

import { goodBlogUrl } from "../api";

@Injectable()
export class GoodBlogService {

  constructor(private http: Http) {
  }

  getGoodBlogItems():Observable<Response> {
    return this.http.get(goodBlogUrl)
      .map((res: Response) => res.json())
  };


}
