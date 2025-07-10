import { Routes } from '@angular/router';
import path from 'path';
import { PInicial } from './p-inicial/p-inicial';
import { Inicio } from './inicio/inicio';

export const routes: Routes = [
    {path:'',component:Inicio},
    {path:'p_inicial',component:PInicial}
];
