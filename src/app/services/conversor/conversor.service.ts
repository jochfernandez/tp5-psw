import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConversorService {
  constructor(private _httpOption : HttpClient) { }
  postConversor(pesos : string, de: string, a : string) : Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '19f387743dmshaea5dbab8882625p122650jsn1d067f5ac8c3',
        'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
      })
    }
    const body = new HttpParams()
      .set('from-value', pesos)
      .set('from-type', de)
      .set('to-type', a);
    return this._httpOption.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert", body, httpOption);
  }
}
