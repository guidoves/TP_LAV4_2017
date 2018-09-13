import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdivinaElNumeroComponent } from './components/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from './components/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from './components/login/login.component';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuloExterno } from './modulo.externo';

import { RouterModule, Routes } from '@angular/router';

import { MiHttpService } from './services/mi-http/mi-http.service';
import { PaisesService } from './services/paises.service';

import { JugadoresService } from './services/jugadores.service';
import { ArchivosJugadoresService} from './services/archivos-jugadores.service';
import { ErrorComponent } from './components/error/error.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AgilidadAritmeticaComponent } from './components/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from './components/menu/menu.component';
import { AdivinaMasListadoComponent } from './components/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from './components/agilidad-mas-listado/agilidad-mas-listado.component';
import { RuteandoModule } from './routes/ruteando.module';
import { ListadoComponent } from './components/listado/listado.component';

import { JugadoresListadoComponent } from './components/jugadores-listado/jugadores-listado.component';

import { JuegoServiceService } from './services/juego-service.service';
import { ListadosComponent } from './components/listados/listados.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { AnagramaComponent } from './components/anagrama/anagrama.component';
import { ListadoDePaisesComponent } from './components/listado-de-paises/listado-de-paises.component';
import { MapaDeGoogleComponent } from './components/mapa-de-google/mapa-de-google.component';
import { AgmCoreModule } from '@agm/core';
import { InputJugadoresComponent } from './components/input-jugadores/input-jugadores.component';
import { SexoPipe } from './pipes/sexo.pipe';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PiedraPapelTijeraComponent } from './components/piedra-papel-tijera/piedra-papel-tijera.component';
import { PiensaRapidoComponent } from './components/piensa-rapido/piensa-rapido.component';
import { CuentaAtrasComponent } from './components/piensa-rapido/cuenta-atras/cuenta-atras.component';

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    ListadoDeResultadosComponent,
    ErrorComponent,
    PrincipalComponent,
    LoginComponent,
    AgilidadAritmeticaComponent,
    MenuComponent,
    AdivinaMasListadoComponent,
    AgilidadMasListadoComponent,
    ListadoComponent,
    ListadosComponent,
    JuegosComponent,
    RegistroComponent,
    MenuCardComponent,
    CabeceraComponent,
    QuienSoyComponent,
    AnagramaComponent,
    ListadoDePaisesComponent,
    MapaDeGoogleComponent,
    JugadoresListadoComponent,
    InputJugadoresComponent,
    SexoPipe,
    NavbarComponent,
    FooterComponent,
    PiedraPapelTijeraComponent,
    PiensaRapidoComponent,
    CuentaAtrasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RuteandoModule,
    HttpModule,
    RouterModule,
    BrowserAnimationsModule,
    ModuloExterno,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
    })
    // NgbModule.forRoot(MiRuteo),
    // importo el ruteo
    // RouterModule.forRoot(MiRuteo)
  ],
  providers: [ JuegoServiceService, MiHttpService, PaisesService, ArchivosJugadoresService, JugadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
