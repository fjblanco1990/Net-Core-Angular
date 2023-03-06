import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./Components/inicio/inicio.module').then(module => module.InicioModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./Components/dashboard/dashboard.module').then(module => module.DashboardModule)
  },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
