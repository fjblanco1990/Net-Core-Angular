import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';
import { CuestionariosComponent } from './cuestionarios/cuestionarios.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
      path: '',
      component: DashboardComponent,
      children: [
        { path: '', component: CuestionariosComponent },
        { path: 'cambiar-password', component: CambiarPasswordComponent },
        { path: '**', redirectTo: 'dashboard'}
      ]
    },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
