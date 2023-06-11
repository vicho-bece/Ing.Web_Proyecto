import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptsService {

  constructor() { }

  public cargarJS( files:string[] ){
    for( let file of files ){
      let script = document.createElement("script");
      script.src = "./assets/" + file + ".js";
      script.type = 'text/javascript';
      document.getElementsByTagName('body')[0].appendChild(script);
    }
  }
}
