import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { evento } from '../interface/intereventos';

@Injectable({
  providedIn: 'root'
})
export class Eventos {

  private url = "http://localhost:5289/api/evento"
  constructor( private http: HttpClient) { }

  putEvento(item: evento ):Observable<evento>{
    return this.http.post<evento>(this.url, item)
  }

  getEvento(): Observable<evento[]>{
    return this.http.get<evento[]>(this.url)
  }
}
