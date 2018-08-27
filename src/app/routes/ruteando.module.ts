import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from '../components/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from '../components/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from '../components/login/login.component';
import { ErrorComponent } from '../components/error/error.component';
import { PrincipalComponent } from '../components/principal/principal.component';
import { AgilidadAritmeticaComponent } from '../components/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from '../components/menu/menu.component';
import { AdivinaMasListadoComponent } from '../components/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from '../components/agilidad-mas-listado/agilidad-mas-listado.component';
import { ListadoComponent } from '../components/listado/listado.component';
import { ListadosComponent } from '../components/listados/listados.component';
import { JuegosComponent } from '../components/juegos/juegos.component';
import { RegistroComponent } from '../components/registro/registro.component';
import { MenuCardComponent } from '../components/menu-card/menu-card.component';
import { CabeceraComponent } from '../components/cabecera/cabecera.component';
import { QuienSoyComponent } from '../components/quien-soy/quien-soy.component';
import { ListadoDePaisesComponent } from '../components/listado-de-paises/listado-de-paises.component';
import { MapaDeGoogleComponent } from '../components/mapa-de-google/mapa-de-google.component';
import { JugadoresListadoComponent } from '../components/jugadores-listado/jugadores-listado.component';


// declaro donde quiero que se dirija
const MiRuteo = [
{path: 'Jugadores' , component: JugadoresListadoComponent},
{path: '' , component: PrincipalComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Mapa' , component: MapaDeGoogleComponent},
{path: 'QuienSoy' , component: QuienSoyComponent},
{path: 'Registro' , component: RegistroComponent},
{path: 'Principal' , component: PrincipalComponent},
{path: 'Listado' , component: ListadoComponent},
{path: 'Paises' , component: ListadoDePaisesComponent},

{ path: 'Juegos' ,
component: JuegosComponent ,
children:
     [{path: '' , component: MenuCardComponent},
     {path: 'Adivina' , component: AdivinaElNumeroComponent},
      {path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
      {path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
      {path: 'Agilidad' , component: AgilidadAritmeticaComponent}]
},
{path: '**' , component: ErrorComponent},
{path: 'error' , component: ErrorComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
