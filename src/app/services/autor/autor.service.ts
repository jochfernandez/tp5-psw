import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private _http: HttpClient) { }
  getAutores() : Observable<any>{
    let httpOption = {
      headers : new HttpHeaders({
        'x-rapidapi-key': 'd8ce3b2f5bmshd9c6ef221d79e83p118573jsn67c768439ad2',
        'x-rapidapi-host': 'hapi-books.p.rapidapi.com'
      })
    }
    return this._http.get("https://hapi-books.p.rapidapi.com/top_authors", httpOption);
  }

  getBiografia(path: string) {
    let httpOption = {
      headers : new HttpHeaders({
        'x-rapidapi-key': 'd8ce3b2f5bmshd9c6ef221d79e83p118573jsn67c768439ad2',
        'x-rapidapi-host': 'hapi-books.p.rapidapi.com'
      })
    }
    return this._http.get("https://hapi-books.p.rapidapi.com/author/"+path, httpOption);
  }
}
