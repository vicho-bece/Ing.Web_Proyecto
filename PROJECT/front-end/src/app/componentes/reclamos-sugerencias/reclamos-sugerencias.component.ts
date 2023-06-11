import { Component } from '@angular/core';
import { ScriptsService } from 'src/app/servicios/scripts.service';

@Component({
  selector: 'app-reclamos-sugerencias',
  templateUrl: './reclamos-sugerencias.component.html',
  styleUrls: ['./reclamos-sugerencias.component.scss']
})
export class ReclamosSugerenciasComponent {

  constructor(private java:ScriptsService){
    java.cargarJS(["reclamo-sugerencia/rc"]);
  }
}
