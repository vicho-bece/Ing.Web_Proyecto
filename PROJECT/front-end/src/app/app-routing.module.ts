import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { TarifasComponent } from './componentes/tarifas/tarifas.component';
import { EncontrarBusComponent } from './componentes/encontrar-bus/encontrar-bus.component';
import { ReclamosSugerenciasComponent } from './componentes/reclamos-sugerencias/reclamos-sugerencias.component';
import { DatosBusConductorComponent } from './componentes/datos-bus-conductor/datos-bus-conductor.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'noticia', component:NoticiasComponent},
  {path: 'tarifa', component:TarifasComponent},
  {path: 'encontrarBus', component:EncontrarBusComponent},
  {path: 'reclamos_sugerencias', component:ReclamosSugerenciasComponent},
  {path: 'datos', component:DatosBusConductorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
