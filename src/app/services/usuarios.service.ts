import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario{
  id: number;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  urlUsuarios = 'http://localhost:5289/api/usuarios/all'
  constructor(private http: HttpClient) { }
  getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.urlUsuarios);
  } 
}
