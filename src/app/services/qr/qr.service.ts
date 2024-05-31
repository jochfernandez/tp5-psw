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
        'x-rapidapi-key': 'd8ce3b2f5bmshd9c6ef221d79e83p118573jsn67c768439ad2',
        'x-rapidapi-host': 'neutrinoapi-qr-code.p.rapidapi.com',
        'Content-Type': 'application/json'
      })),
      responseType: 'blob' as 'json' // Aquí está el cambio
    }
    const body = {
      'content': link,
    }
    return this._http.post<Blob>("https://neutrinoapi-qr-code.p.rapidapi.com/qr-code", body, httpOption);
  }

}
