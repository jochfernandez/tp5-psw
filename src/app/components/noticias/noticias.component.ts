import { Component } from '@angular/core';
import {NoticiaService} from "../../services/Noticias/noticia.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  constructor(private noticiaService: NoticiaService) {
  }

  noticias : Array<any> = [];

  obtenerNoticias(){
    this.noticiaService.getNoticias().subscribe(
      (data) => {
        console.log(data);
        this.noticias = data.homepageArticles[0].articles;
        console.log(this.noticias);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
