import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
import { Config } from 'datatables.net';
import { Eventos } from '../services/eventos';

interface evento {
  id: number,
  usuario: string,
  evento: string,
  fecha: string,
  lugar: string
}


@Component({
  selector: 'app-reservas',
  imports: [ DataTablesModule],
  templateUrl: './reservas.html',
  styleUrl: './reservas.css'
})
export class Reservas implements OnInit {

  constructor(private dataEventos: Eventos){}

  data: evento[] = [{
    id: 1,
  usuario: "Michael",
  evento: "Capacitación Oracle",
  fecha: "19-04-2025",
  lugar: "Aulas Multiples"
  },
  {
    id: 2,
  usuario: "Jose",
  evento: "Juegos de mesa",
  fecha: "14-04-2024",
  lugar: "Auditorio"
  },
  {
    id: 3,
  usuario: "Carlos",
  evento: "Taller Medecina",
  fecha: "19-04-2025",
  lugar: "Terraza"
  }
]

objRecibido: any;
  dtOptions: Config={};

  ngOnInit(): void {
    this.dataEventos.evento.subscribe(objeto =>{
      this.objRecibido = objeto;
    })
    this.dtOptions = {
      data: this.data,
      columns: [{
        title: 'Id',
        data: 'this.objRecibido.id'
      },
        {
        title: 'Usuario',
        data: 'this.objRecibido.usuario'
      }, {
        title: 'Evento',
        data: 'this.objRecibido.evento'
      }, {
        title: 'Fecha / Hora',
        data: 'this.objRecibido.fecha'
      },{
        title: 'Lugar',
        data: 'this.objRecibido.lugar'
      }]
    };
  }
}
