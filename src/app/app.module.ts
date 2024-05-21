import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule si usas formularios

import { AppComponent } from './app.component';
import { JefeComponent } from './jefe/jefe.component';
import { EmpleadoComponent } from './empleado/empleado.component';

import { NzButtonModule } from 'ng-zorro-antd/button';  // Importa el módulo de botones de Angular Zorro
import { NzMessageModule } from 'ng-zorro-antd/message';  // Importa el módulo de mensajes de Angular Zorro

@NgModule({
  declarations: [
    AppComponent,
    JefeComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NzButtonModule,
    NzMessageModule  // Añade aquí todos los módulos de Zorro que necesites
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
