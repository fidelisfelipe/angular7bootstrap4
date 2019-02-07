import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portal';
  texto : string = 'Mapas';
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;
  elementType:'url'|'canvas'|'img' = 'url';
  value:string = 'Portal';
  
  printDiv = function(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }
  
}
