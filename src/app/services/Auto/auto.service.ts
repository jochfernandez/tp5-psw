import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  constructor(private _http : HttpClient) { }
  httpOption = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': '19f387743dmshaea5dbab8882625p122650jsn1d067f5ac8c3',
      'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
    })
  }
  getAutos(): Observable<any>{
    return this._http.get("https://car-api2.p.rapidapi.com/api/makes?direction=asc&sort=id",this.httpOption);
  }
  getModelos(modelo : String): Observable<any>{
    return this._http.get("https://car-api2.p.rapidapi.com/api/models?make="+modelo+"&sort=id&direction=asc&year=2020&verbose=yes",this.httpOption);
  }
}
