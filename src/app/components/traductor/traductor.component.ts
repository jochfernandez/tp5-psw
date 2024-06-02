import { Component } from '@angular/core';
import {TraductorService} from "../../services/traductor/traductor.service";
import {CommonModule} from "@angular/common";
import {PrimeraLetraMayusculaPipe} from "../../pipes/traductor/primera-letra-mayuscula.pipe";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-traductor',
  standalone: true,
  imports: [CommonModule, PrimeraLetraMayusculaPipe, FormsModule],
  templateUrl: './traductor.component.html',
  styleUrl: './traductor.component.css'
})
export class TraductorComponent {
  constructor(private traductorService: TraductorService) {}
  idiomas : Array<any> = [];
  idiomaBase : string = "Idioma Base" ;
  idiomaTraducido : string = "Idioma a traducir";

  textoATraducir : string = "";
  textoTraducido : any = "";

  source! : string;
  target! : string;

  obtenerIdiomas(){
    this.traductorService.getLenguajes().subscribe(
      (data) => {
        console.log(data);
        this.idiomas = data.data.languages;
        console.log(this.idiomas);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  seleccionarIdiomaATraducir(idioma : string, acr : string) {
    this.idiomaTraducido = idioma;
    this.target = acr;
    console.log(this.target);
    console.log(this.idiomaTraducido);
  }

  seleccionarIdiomaBase(idioma:string, acr : string) {
    this.idiomaBase = idioma;
    this.source = acr;
  }

  revetir() {
    let aux = this.idiomaBase;
    this.idiomaBase = this.idiomaTraducido;
    this.idiomaTraducido = aux;
    let auxAcr : string = this.source;
    this.source = this.target;
    this.target = auxAcr;
    this.textoATraducir = this.textoTraducido.translatedText;
    this.traducir();
  }

  traducir(){
    console.log(this.textoATraducir);
    if (this.traductorService) {
      if (this.textoATraducir) {
        // @ts-ignore
        this.traductorService.sendText(this.textoATraducir, this.source, this.target).subscribe(
          (data) => {
            console.log(data);
            this.textoTraducido = data.data.translations[0];
            console.log(this.textoTraducido);
          },
          (error) => {
            console.log(error);
          }
        )
      } else {
        console.log('traductorService or textoATraducir is null');
      }
    } else {
      console.log('traductorService or textoATraducir is null');
    }
  }
}
