import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { BienvenidaComponent } from './Components/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './Components/inicio/login/login.component';
import { RegisterComponent } from './Components/inicio/register/register.component';
import { ValidatorRequiredComponent } from './Shared/utils/validators/validator-required/validator-required.component';
import { ValidatorMinComponent } from './Shared/utils/validators/validator-min/validator-min.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CambiarPasswordComponent } from './Components/dashboard/cambiar-password/cambiar-password.component';
import { CuestionariosComponent } from './Components/dashboard/cuestionarios/cuestionarios.component';
import { NavbarComponent } from './Components/dashboard/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BienvenidaComponent,
    LoginComponent,
    RegisterComponent,
    ValidatorRequiredComponent,
    ValidatorMinComponent,
    DashboardComponent,
    CambiarPasswordComponent,
    CuestionariosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
