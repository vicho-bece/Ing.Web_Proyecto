import { Component } from '@angular/core';
import { ScriptsService } from 'src/app/servicios/scripts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor( private java:ScriptsService ){
    java.cargarJS(["home/carrusel"]);
  }
}
