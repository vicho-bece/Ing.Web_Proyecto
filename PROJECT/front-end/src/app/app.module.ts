import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScriptsService } from "./servicios/scripts.service";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { TarifasComponent } from './componentes/tarifas/tarifas.component';
import { ReclamosSugerenciasComponent } from './componentes/reclamos-sugerencias/reclamos-sugerencias.component';
import { EncontrarBusComponent } from './componentes/encontrar-bus/encontrar-bus.component';
import { DatosBusConductorComponent } from './componentes/datos-bus-conductor/datos-bus-conductor.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ResultadosComponent } from './componentes/resultados/resultados.component';
import { EditarDatosComponent } from './componentes/editar-datos/editar-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NoticiasComponent,
    TarifasComponent,
    ReclamosSugerenciasComponent,
    EncontrarBusComponent,
    DatosBusConductorComponent,
    RegistroComponent,
    ResultadosComponent,
    EditarDatosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
