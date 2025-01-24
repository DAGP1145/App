import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { guardGuard } from './myguard.guard';

const routes: Routes = [
  {
    path: 'home', /* con un boton desde el perfil-docente se accede a este page */
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [guardGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
    
  },
  {
    path: 'perfil-alumno',
    loadChildren: () => import('./perfil-alumno/perfil-alumno.module').then( m => m.PerfilAlumnoPageModule),
    canActivate: [guardGuard]
  },
  {
    path: 'perfil-docente',
    loadChildren: () => import('./perfil-docente/perfil-docente.module').then( m => m.PerfilDocentePageModule),
    canActivate: [guardGuard]
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page404/page404.module').then( m => m.Page404PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
