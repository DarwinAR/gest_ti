import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
import { Config } from 'datatables.net';

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
  fecha: "19-04-2025",
  lugar: "Auditorio"
  }
]
  dtOptions: Config={};

  ngOnInit(): void {
    this.dtOptions = {
      data: this.data,
      columns: [{
        title: 'Id',
        data: 'id'
      },
        {
        title: 'Usuario',
        data: 'usuario'
      }, {
        title: 'Evento',
        data: 'evento'
      }, {
        title: 'Fecha / Hora',
        data: 'fecha'
      },{
        title: 'Lugar',
        data: 'lugar'
      }]
    };
  }
}
