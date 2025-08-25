import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-horario',
  imports: [CommonModule],
  templateUrl: './horario.html',
  styleUrl: './horario.css'
})
export class Horario {
  constructor(public ruta: Router){}
  
  dias = [
    {dia:'Lunes'},
    {dia:'Martes'},
    {dia:'Miercoles'},
    {dia:'Jueves'},
    {dia:'Viernes'},
    {dia:'Sabado'}
  ]

  semanas = [
    {semana:'1'},
    {semana:'2'},
    {semana:'3'}
  ]
  volver(){
    this.ruta.navigate(['p_inicial']);

  }
}
