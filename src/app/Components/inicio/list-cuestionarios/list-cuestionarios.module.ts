import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCuestionariosRoutingModule } from './list-cuestionarios-routing.module';
import { ListCuestionariosComponent } from './list-cuestionarios.component';
import { IngresarNombreComponent } from './ingresar-nombre/ingresar-nombre.component';
import { RespuestaCuestionarioComponent } from './respuesta-cuestionario/respuesta-cuestionario.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { FormsModule } from '@angular/forms';
import { InicioModule } from '../inicio.module';

@NgModule({
  declarations: [
    ListCuestionariosComponent,
    IngresarNombreComponent,
    PreguntaComponent,
    RespuestaCuestionarioComponent
  ],
  imports: [
    CommonModule,
    ListCuestionariosRoutingModule,
    FormsModule,
    InicioModule
  ]
})
export class ListCuestionariosModule { }
