import { CanActivateFn } from '@angular/router';
import {inject} from '@angular/core';
import { ServicesService } from './services.service';
import { Router } from '@angular/router';



export const guardGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(ServicesService); // Inyecta el servicio de autenticación  
  const router = inject(Router); // Inyecta el router para redirigir

  // Verifica si el usuario está logueado
  if (authService.isLoggedIn()) {
    return true; // Permite el acceso
  } else {
    return router.createUrlTree(['/login']); // Redirige al login si no está autenticado
  }
};

/*Login.ts  */