import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LeerJsonService {
  public directorio = 'assets/'
  constructor(private http:HttpClient){}

  obtenerJson(url:string){
    return this.http.get(this.directorio + url);
  }
}

