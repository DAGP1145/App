import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; /* se agrego */
import { RouterModule } from '@angular/router'; /* se agrego */
import { Router} from '@angular/router'; /* se agrego */
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
  constructor(private router:Router, private authService: ServicesService) { }

   /* se agrego el metodo navegar básico
  navegar(){
    console.log("ingresamos al metodo");*/

   /* se modifico el metodo navegar */
   navegar(correo: string | number | null | undefined) {
    if (typeof correo !== 'string' || !correo) {
      console.log("El correo ingresado no es válido.");
      return;
    }

    console.log("Ingresamos al método con el correo:", correo);
/* por el momento aun no se me ocurre que tipo de información traspasar, 
asi que esto quedara para despues, pero es parte del entregable 1

    let pedrito: NavigationExtras = {
      state : {
        nombre:"diego",
        apellido: "cares",
        edad: 37
      }
    }
    this.router.navigate(["/perfil-alumno"], pedrito);*/

    if (correo.endsWith("@duocuc.cl")) {
      this.authService.login();
      this.router.navigate(["/perfil-alumno"]);
    } else if (correo.endsWith("@profesor.duoc.cl")) {
      this.authService.login();
      this.router.navigate(["/perfil-docente"]);
    } else {
      console.log("Correo no válido para redirección");
    }
  }

  ngOnInit() {
  }

}
