import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IpService {

  lat : string = "";
  long : string = "";

  constructor(private _http : HttpClient) { }
  solicitarIp(ip: string) : Observable<any> | null{
    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '19f387743dmshaea5dbab8882625p122650jsn1d067f5ac8c3',
        'X-RapidAPI-Host': 'community-neutrino-ip-info.p.rapidapi.com'
      })
    }
    const body = new HttpParams()
      .set('ip', ip);
    return this._http.post("https://community-neutrino-ip-info.p.rapidapi.com/ip-info", body, httpOption);
  }

  solicitarLatLong(latitude: string, longitude:string) : Observable<any> | null{
    let httpOption = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '19f387743dmshaea5dbab8882625p122650jsn1d067f5ac8c3',
        'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
      })
    }
    return this._http.get("https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?lat="+latitude+"&lng="+longitude, httpOption);
  }

}
