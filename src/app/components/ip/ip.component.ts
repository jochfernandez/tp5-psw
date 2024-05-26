import { Component } from '@angular/core';
import {IpService} from "../../services/Ip/ip.service";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {TimePipe} from "../../pipes/time.pipe";

@Component({
  selector: 'app-ip',
  standalone: true,
  imports: [FormsModule, CommonModule, TimePipe],
  templateUrl: './ip.component.html',
  styleUrl: './ip.component.css'
})
export class IpComponent {
  texto : string = "";
  direccion : any = [];
  ubicacion : any = [];
  ubicacionPorLatLong : any = [];
  constructor(private ipService: IpService){
  }
  buscarIp() {
    if (this.ipService) {
      if (this.texto) {
        // @ts-ignore
        this.ipService.solicitarIp(this.texto).subscribe(
          (data) => {
            console.log(data);
            this.direccion = data;
            this.ubicacion = data.timezone;
            },
          (error) => {
            console.log(error);
          }
        )
      } else {
        console.log('ipService or texto is null');
      }
    } else {
      console.log('ipService or texto is null');
    }
  }
  buscarLatLong(latitude : string, longitude : string) {
    if (this.ipService) {
      // @ts-ignore
      this.ipService.solicitarLatLong(latitude,longitude).subscribe(
        (data) => {
          console.log(data);
          this.ubicacionPorLatLong = data.Results[0];
        },
        (error) => {
          console.log(error);
        }
      )
    } else {
      console.log('ipService is null');
    }
  }
}
