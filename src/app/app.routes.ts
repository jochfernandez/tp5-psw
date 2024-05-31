import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TraductorComponent} from "./components/traductor/traductor.component";
import {NoticiasComponent} from "./components/noticias/noticias.component";
import {AutosComponent} from "./components/autos/autos.component";
import {MusicaComponent} from "./components/musica/musica.component";
import {IpComponent} from "./components/ip/ip.component";
import {ConversorComponent} from "./components/conversor/conversor.component";
import {QrComponent} from "./components/qr/qr.component";
import {RecetaComponent} from "./components/receta/receta.component";
import {AutorComponent} from "./components/autor/autor.component";

export const routes: Routes = [
  {
    path: 'inicio', component: HomeComponent
  },
  {
    path: 'traductor', component: TraductorComponent
  },
  {
    path: 'noticias', component: NoticiasComponent
  },
  {
    path: 'autos', component: AutosComponent
  },
  {
    path: 'musica', component: MusicaComponent
  },
  {
    path:'ip', component: IpComponent
  },
  {
    path: 'conversor', component : ConversorComponent
  },
  {
    path: 'qr', component : QrComponent
  },
  {
    path: 'receta', component: RecetaComponent
  },
  {

    path: 'autores', component: AutorComponent,

  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'inicio'
  }
];
