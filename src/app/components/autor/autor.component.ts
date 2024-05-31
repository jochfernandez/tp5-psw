import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {AutorService} from "../../services/autor/autor.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-autor',
  standalone: true,
    imports: [CommonModule,FormsModule],
  templateUrl: './autor.component.html',
  styleUrl: './autor.component.css'
})
export class AutorComponent {

  constructor(private autorService : AutorService) {
  }
  autores : Array<any> = [];
  obtenerAutores() {
    this.autorService.getAutores().subscribe(
      (data) => {
        console.log(data);
        this.autores = data;
        console.log(this.autores);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  biografia : any = [];
  libros : Array<any> = [];
  obtenerBiografia(path : string) {
    this.autorService.getBiografia(path).subscribe(
      (data) => {
        console.log(data);
        // @ts-ignore
        this.biografia = data;
        // @ts-ignore
        this.libros = data.author_books;
        console.log(this.autores);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
