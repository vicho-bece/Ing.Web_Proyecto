import { Component} from '@angular/core';
import { LeerJsonService } from 'src/app/servicios/leer-json.service';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.scss']
})
export class TarifasComponent{

  datos:any;

  constructor(private json:LeerJsonService){}

  valorSelect(event: any){
    this.datos = [];
    var val:string;
    val = event.target.value;
    if(val != "Seleccione una unidad-"){
      this.json.obtenerJson("tarifas/"+val+".json").subscribe(data =>{
        this.datos = data;
      })
    }
  }
}


