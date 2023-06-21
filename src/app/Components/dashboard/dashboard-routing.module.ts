import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';
import { CuestionariosComponent } from './cuestionarios/cuestionarios.component';
import { DashboardComponent } from './dashboard.component';
import { NuevoCuestionarioComponent } from './cuestionarios/nuevo-cuestionario/nuevo-cuestionario.component';
import { PasoUnoComponent } from './cuestionarios/nuevo-cuestionario/paso-uno/paso-uno.component';
import { PasoDosComponent } from './cuestionarios/nuevo-cuestionario/paso-dos/paso-dos.component';
import { CuestionarioComponent } from './cuestionarios/cuestionario/cuestionario.component';

const routes: Routes = [
  {
      path: '',
      component: DashboardComponent,
      children: [
        { path: '', component: CuestionariosComponent },
        { path: 'cambiar-password', component: CambiarPasswordComponent },
        { path: 'ver-cuestionario/:id', component: CuestionarioComponent},
        { path: 'nuevo-cuestionario', 
          component: NuevoCuestionarioComponent, 
          children:[
            { path: 'paso-uno', component: PasoUnoComponent },
            { path: 'paso-dos', component: PasoDosComponent }
          ]
        },
        { path: '**', redirectTo: 'dashboard'}
      ]
    },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
