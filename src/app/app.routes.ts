import { Routes } from '@angular/router';
import path from 'path';
import { PInicial } from './p-inicial/p-inicial';
import { Inicio } from './inicio/inicio';
import { Horario } from './horario/horario';
import { FormReserva } from './form-reserva/form-reserva';


export const routes: Routes = [
    {path:'',component:Inicio},
    {path:'p_inicial',component:PInicial},
    {path:'horario',component:Horario},
    {path:'FormReserva',component:FormReserva}
];
