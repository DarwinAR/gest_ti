import { Component, ɵIS_INCREMENTAL_HYDRATION_ENABLED } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { FormGroup, FormsModule } from '@angular/forms';
import { PInicial } from './p-inicial/p-inicial';



@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports:[FormsModule,RouterOutlet],
  styleUrl: './app.css'
})
export class App {
  protected title = 't_i';

} 
