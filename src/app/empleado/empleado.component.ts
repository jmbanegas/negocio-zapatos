import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  @Input() ordenDelJefe!: string;  // Asegúrate de usar la notación correcta para la propiedad @Input
  @Output() respuestaDelEmpleado = new EventEmitter<string>();

  responderAlJefe() {
    const respuesta = 'Orden completada: ' + this.ordenDelJefe;
    this.respuestaDelEmpleado.emit(respuesta);
  }
}
