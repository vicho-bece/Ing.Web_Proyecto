import { Component } from '@angular/core';
import { ScriptsService } from 'src/app/servicios/scripts.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  constructor(private java:ScriptsService){
    java.cargarJS(["login/validar"]);

  }
}
