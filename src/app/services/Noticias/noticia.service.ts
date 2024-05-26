import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private _http : HttpClient) { }
  getNoticias(): Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '19f387743dmshaea5dbab8882625p122650jsn1d067f5ac8c3',
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
      })
    }
    return this._http.get("https://livescore6.p.rapidapi.com/news/v2/list", httpOption);
  }
}
