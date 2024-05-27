import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QrService {

  constructor(private _http : HttpClient) { }

  solicitarQr(link : string) : Observable<Blob>{
    let httpOption = {
      headers : new HttpHeaders(({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '19f387743dmshaea5dbab8882625p122650jsn1d067f5ac8c3',
        'X-RapidAPI-Host': 'neutrinoapi-qr-code.p.rapidapi.com'
      })),
      params: new HttpParams().set('content', link),
      responseType: 'blob' as 'json'
    }
    // @ts-ignore
    return this._http.post("https://neutrinoapi-qr-code.p.rapidapi.com/qr-code", null, httpOption);
  }

}
