import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ConversorService} from "../../services/conversor/conversor.service";

@Component({
  selector: 'app-conversor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './conversor.component.html',
  styleUrl: './conversor.component.css'
})
export class ConversorComponent {
  constructor(private conversorService : ConversorService) { }
  pesos : string = "";
  de : string = "Moneda Base";
  hasta : string = "Moneda Destino";
  dinero : any = [] ;
  convertirDinero(){
    this.conversorService.postConversor(this.pesos, this.de, this.hasta).subscribe(
      (data) => {
        console.log(data);
        this.dinero = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  seleccionarMonedaBase(de : string) {
    this.de = de;
  }

  seleccionarMonedaDestino(hasta: string) {
    this.hasta = hasta;
  }
}
