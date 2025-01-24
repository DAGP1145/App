import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private loggedIn = false; // Variable para gestionar el estado de autenticación

  constructor() { }

  // Método para iniciar sesión
  login() {
    this.loggedIn = true; // Cambia el estado a autenticado
    console.log("Usuario autenticado.");
  }

  // Método para cerrar sesión
  logout() {
    this.loggedIn = false; // Cambia el estado a no autenticado
    console.log("Usuario no autenticado.");
  }

  // Método para verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    return this.loggedIn; // Retorna el estado actual
  }

}
