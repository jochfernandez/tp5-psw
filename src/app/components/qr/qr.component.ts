import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {QrService} from "../../services/qr/qr.service";
import {CommonModule} from "@angular/common";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-qr',
  standalone: true,
  imports: [
    ReactiveFormsModule,FormsModule,CommonModule
  ],
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.css'
})
export class QrComponent {
  qrImage : any;
  constructor(private _qrService: QrService, private sanitizer : DomSanitizer) {}
  link! : string;
  generarQr(){
    if (this._qrService) {
      // @ts-ignore
      this._qrService.solicitarQr(this.link).subscribe(
        (data) => {
          let reader = new FileReader();
          reader.readAsDataURL(data);
          reader.onloadend = () => {
            this.qrImage = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
          }
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      )
    } else {
      console.log('qrService is null');
    }
  }
}
