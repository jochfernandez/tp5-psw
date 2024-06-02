import { Component } from '@angular/core';
import {RecetaService} from "../../services/receta/receta.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-receta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.css'
})
export class RecetaComponent {
  constructor(private recetaService : RecetaService) {
  }

  recetas : Array<any> = [];
  detalles : Array<any> = [];
  pasos : Array<any> = [];
  obtenerRecetas(){
    this.recetaService.getRecetas().subscribe(
      (data) => {
        console.log(data);
        this.recetas = data;
        console.log(this.recetas);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  verReceta(path : string) {
    this.recetaService.getDetalles(path).subscribe(
      (data) => {
        console.log(data);
        // @ts-ignore
        this.detalles = data.Ingredientes;
        // @ts-ignore
        this.pasos = data.Pasos;
        console.log(this.detalles);
        console.log(this.pasos);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
