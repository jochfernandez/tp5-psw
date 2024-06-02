import { Component } from '@angular/core';
import {AutoService} from "../../services/auto/auto.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.css'
})
export class AutosComponent {
  constructor(private autoService:AutoService) {  }
  marca! : String;
  autos : Array<any> = [];
  modelos : Array<any> = [];
  obtenerAutos(){
    this.autoService.getAutos().subscribe(
      (data) => {
        console.log(data);
        this.autos = data.data;
        console.log(this.autos);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  obtenerModelos(marca : String) {
    this.marca = marca;
    this.autoService.getModelos(marca).subscribe(
      (data) => {
        console.log(data);
        this.modelos = data.data;
        console.log(this.modelos);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  limpiarModelos(){
    this.modelos = [];
  }
}
