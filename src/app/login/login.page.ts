import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; /* se agrego */
import { RouterModule } from '@angular/router'; /* se agrego */
import { Router} from '@angular/router'; /* se agrego */
import { ConsumoApiService } from '../consumo-api.service';
import { ServicesService } from '../services.service';
import { NavigationExtras } from '@angular/router'; /* se agrego pero no se utiliza */
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  standalone: true, /* Se agregan manualmente   standalone: true,*/
  imports: [IonicModule, RouterModule],     /*imports: [IonicModule],*/
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
                /* se agrego */
  constructor(private router:Router, private consumoAPI: ConsumoApiService, private servicesService : ServicesService) { }

   /* se agrego el metodo navegar básico
  navegar(){
    console.log("ingresamos al metodo");*/

   /* se modifico el metodo navegar 
   navegar(correo: string | number | null | undefined) {
    if (typeof correo !== 'string' || !correo) {
      console.log("El correo ingresado no es válido.");
      return;
    }

    console.log("Ingresamos al método con el correo:", correo);
 por el momento aun no se me ocurre que tipo de información traspasar, 
asi que esto quedara para despues, pero es parte del entregable 1

    let pedrito: NavigationExtras = {
      state : {
        nombre:"diego",
        apellido: "cares",
        edad: 37
      }
    }
    this.router.navigate(["/perfil-alumno"], pedrito);

    if (correo.endsWith("@duocuc.cl")) {
      this.authService.login();
      this.router.navigate(["/perfil-alumno"]);
    } else if (correo.endsWith("@profesor.duoc.cl")) {
      this.authService.login();
      this.router.navigate(["/perfil-docente"]);
    } else {
      console.log("Correo no válido para redirección");
    }
  }*/


    navegar(correo: string | number | null | undefined) {
      if (!correo || typeof correo !== 'string') {
        console.log("El correo ingresado no es válido.");
        return;
      }
    
      console.log("Ingresamos al método con el correo:", correo);
    
      // Extraer la parte antes del "@"
      const nombreUsuario = correo.split('@')[0];

      console.log("Ingresamos al método con el nombre:", nombreUsuario);

    
      if (!nombreUsuario) {
        console.log("No se pudo extraer un nombre de usuario válido del correo.");
        return;
      }
    
      // Validar por dominio del correo
      if (correo.endsWith("@duocuc.cl")) {
        console.log("Correo válido para perfil-alumno, verificando en la API...");
    
        // Verificar en la API para confirmar que es alumno
        this.consumoAPI.login({ user: nombreUsuario, password: 'password2' }).subscribe(
          (response) => {
            console.log('Respuesta del login:', response);
            if (response.tipoPerfil === 2) {
              console.log('Usuario confirmado como alumno, perfil del usuario:', response.tipoPerfil);
              this.servicesService.login();
              this.router.navigate(["/perfil-alumno"]);
            } else {
              console.log("Perfil no válido para alumno.");
            }
          },
          (error) => {
            console.error("Error al validar como alumno:", error);
          }
        );
    
      } else if (correo.endsWith("@profesor.duoc.cl")) {
        console.log("Correo válido para perfil-docente, verificando en la API...");
    
        // Verificar en la API para confirmar que es profesor
        this.consumoAPI.login({ user: nombreUsuario, password: 'password1' }).subscribe(
          (response) => {
            if (response.tipoPerfil === 1) {
              console.log('Usuario confirmado como docente,perfil del usuario:', response.tipoPerfil);
              this.servicesService.login();
              // Pasar el ID del profesor como NavigationExtras
              const navigationExtras : NavigationExtras = {
                state: { profesor: response }
              };
              this.router.navigate(["/perfil-docente"], navigationExtras);
            } else {
              console.log("Perfil no válido para docente.");
            }
          },
          (error) => {
            console.error("Error al validar como docente:", error);
          }
        );
    
      } else {
        console.log("Correo no válido para redirección.");
      }
    }
    

  ngOnInit() {
  }

}
