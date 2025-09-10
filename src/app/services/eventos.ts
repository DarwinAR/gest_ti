import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Eventos {

  private eventos = new BehaviorSubject<any>({})
  evento = this.eventos.asObservable();
  constructor() { }

  putEvento(objeto: any){
    this.eventos.next(objeto);
  }
}
