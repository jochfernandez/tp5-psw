import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TraductorService {

  private httpOption = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': '19f387743dmshaea5dbab8882625p122650jsn1d067f5ac8c3',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    })
  }
  constructor(private _http : HttpClient) { }
  getLenguajes(): Observable<any>{
    return this._http.get("https://google-translate1.p.rapidapi.com/language/translate/v2/languages?target=es", this.httpOption);
  }
  sendText(texto : string, source : string, target : string): Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '19f387743dmshaea5dbab8882625p122650jsn1d067f5ac8c3',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      })
    }
    const body : HttpParams = new HttpParams()
      .set('q', texto)
      .set('target', target)
      .set('source', source);
    return this._http.post("https://google-translate1.p.rapidapi.com/language/translate/v2", body, httpOption);
  }
}
