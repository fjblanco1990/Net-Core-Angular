import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';
import { CuestionariosComponent } from './cuestionarios/cuestionarios.component';
import { NavbarComponent } from '../../Shared/navbar/navbar.component';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioModule } from '../inicio/inicio.module';
import { AddTokenInterceptor } from 'src/app/Helpers/add-token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NuevoCuestionarioComponent } from './cuestionarios/nuevo-cuestionario/nuevo-cuestionario.component';
import { PasoUnoComponent } from './cuestionarios/nuevo-cuestionario/paso-uno/paso-uno.component';
import { PasoDosComponent } from './cuestionarios/nuevo-cuestionario/paso-dos/paso-dos.component';
import { NuevaPreguntaComponent } from './cuestionarios/nuevo-cuestionario/paso-dos/nueva-pregunta/nueva-pregunta.component';
import { FooterComponent } from 'src/app/Shared/footer/footer.component';
import { CuestionarioComponent } from './cuestionarios/cuestionario/cuestionario.component';

// import { ValidatorRequiredComponent } from 'src/app/Shared/utils/validators/validator-required/validator-required.component';
// import { ValidatorMinComponent } from 'src/app/Shared/utils/validators/validator-min/validator-min.component';


@NgModule({
  declarations: [
    CambiarPasswordComponent,
    CuestionariosComponent,
    NavbarComponent,
    DashboardComponent,
    NuevoCuestionarioComponent,
    PasoUnoComponent,
    PasoDosComponent,
    NuevaPreguntaComponent,
    FooterComponent,
    CuestionarioComponent
    // ValidatorRequiredComponent,
    // ValidatorMinComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    InicioModule
  ], 
  exports: [
    CambiarPasswordComponent,
    CuestionariosComponent,
    NavbarComponent,
    DashboardComponent
  ],
  providers: [
     { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true},
  ]
})
export class DashboardModule { }
