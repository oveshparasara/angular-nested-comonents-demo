import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {tap} from "rxjs/internal/operators";

export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  constructor(private http: HttpClient) { }


  getCollections(): Observable<any> {
    let data = {
      "page": 1,
      "limit": 10,
      "mid": "1",
      "applicableTo": "HOME",
      "city": "5ae95080f975cd00076adbd2",
      "currentTime": "2019-06-28T05:49:42.095Z",
      "isCuratedCollection": false,
      "isFeaturedCollection": "ALL",
      "channels": [
        "WEB"
      ]
    }
   let API_URL = 'https://apigateway.flashdiner.com/iwantmerchant/iwant-merchant/api/v1/collections/getCollectionsV2?mid=1&page=1&limit=10';


    return this.http
      .post(API_URL, data, httpOptions)
      .pipe(tap(_ => this.log(`user signed in`)));
  }


  getFlashdealCollection(): Observable<any> {
    let data = {
      "page": 1,
      "limit": -1,
      "mid": "1",
      "applicableTo": "HOME",
      "city": "5ae95080f975cd00076adbd2",
      "currentTime": "2019-06-28T05:49:42.095Z",
      "isCuratedCollection": true,
      "isFeaturedCollection": "ALL",
      "channels": [
        "WEB"
      ]
    }
    let API_URL = 'https://apigateway.flashdiner.com/iwantmerchant/iwant-merchant/api/v1/collections/getCollectionsV2?mid=1&page=1&limit=10';


    return this.http
      .post(API_URL, data, httpOptions)
      .pipe(tap(_ => this.log(`user signed in`)));
  }

  log(message){
    console.log(message)
  }

}
