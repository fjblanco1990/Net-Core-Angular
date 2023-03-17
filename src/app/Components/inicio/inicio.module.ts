import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ValidatorRequiredComponent } from 'src/app/Shared/utils/validators/validator-required/validator-required.component';
import { ValidatorMinComponent } from 'src/app/Shared/utils/validators/validator-min/validator-min.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from 'src/app/Shared/utils/loading/loading.component';


@NgModule({
  declarations: [
    InicioComponent,
    BienvenidaComponent,
    LoginComponent,
    RegisterComponent,
    ValidatorRequiredComponent,
    ValidatorMinComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ValidatorMinComponent,
    ValidatorRequiredComponent
  ]
})
export class InicioModule { }
