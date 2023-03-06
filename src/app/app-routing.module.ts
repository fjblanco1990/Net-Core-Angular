import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './Components/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './Components/inicio/login/login.component';
import { RegisterComponent } from './Components/inicio/register/register.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CuestionariosComponent } from './Components/dashboard/cuestionarios/cuestionarios.component';
import { CambiarPasswordComponent } from './Components/dashboard/cambiar-password/cambiar-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },

  {
    path: 'inicio', component: InicioComponent,
    children: [
      { path: '', component: BienvenidaComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: CuestionariosComponent },
      { path: 'cambiar-password', component: CambiarPasswordComponent },
    ]
  },

  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
