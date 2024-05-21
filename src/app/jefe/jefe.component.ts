import { Component } from '@angular/core';

@Component({
  selector: 'app-jefe',
  templateUrl: './jefe.component.html',
  styleUrls: ['./jefe.component.css']
})
export class JefeComponent {
  ordenDelJefe: string = 'Preparar nuevos diseños de zapatos';
  
  recibirRespuesta(respuesta: string) {
    console.log('Respuesta del Empleado:', respuesta);
  }
}
