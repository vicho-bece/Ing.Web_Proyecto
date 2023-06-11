import { Component } from '@angular/core';
import { ScriptsService } from 'src/app/servicios/scripts.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  constructor(private java:ScriptsService){
    java.cargarJS(["registro/registro"]);
  }
}
