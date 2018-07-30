import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class MainService {
  url: string;

  constructor(private http: Http) {
    this.url = "https://my-database-json.herokuapp.com/items";
  }

  getJsonData(): Observable<any> {
    return this.http.get(this.url).map(response => response.json())
      .catch((err: Response | any) => {
        return Observable.throw(err.statusText);
      });
  }

  addItem(itemData): Observable<any> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers,
      method: "post"
    });
    let data = this.http.post(this.url, itemData, options)
      .map(res => res.json())
    return data;
  }

}
