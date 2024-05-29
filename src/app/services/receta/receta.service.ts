import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor(private _http: HttpClient) {
  }

  getRecetas(): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'd8ce3b2f5bmshd9c6ef221d79e83p118573jsn67c768439ad2',
        'x-rapidapi-host': 'recipe-book2.p.rapidapi.com'
      })
    }
    return this._http.get("https://recipe-book2.p.rapidapi.com/recipes-by-category?path=Recetas-de-Aperitivos-tapas-listado_receta-1_1.html&page=1", httpOption);
  }

  getDetalles(pat: string) {
    let httpOption = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'd8ce3b2f5bmshd9c6ef221d79e83p118573jsn67c768439ad2',
        'x-rapidapi-host': 'recipe-book2.p.rapidapi.com'
      })
    }
    return this._http.get("https://recipe-book2.p.rapidapi.com/recipe-details?path="+pat, httpOption);
  }
}
