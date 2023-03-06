import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';
import { CuestionariosComponent } from './cuestionarios/cuestionarios.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioModule } from '../inicio/inicio.module';
// import { ValidatorRequiredComponent } from 'src/app/Shared/utils/validators/validator-required/validator-required.component';
// import { ValidatorMinComponent } from 'src/app/Shared/utils/validators/validator-min/validator-min.component';


@NgModule({
  declarations: [
    CambiarPasswordComponent,
    CuestionariosComponent,
    NavbarComponent,
    DashboardComponent,
    // ValidatorRequiredComponent,
    // ValidatorMinComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    InicioModule
  ], 
  exports: [
    CambiarPasswordComponent,
    CuestionariosComponent,
    NavbarComponent,
    DashboardComponent
  ]
})
export class DashboardModule { }
