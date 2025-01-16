import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; /* se agrego */
import { RouterModule } from '@angular/router'; /* se agrego */
import { Router} from '@angular/router'; /* se agrego */
import { NavigationExtras } from '@angular/router'; /* se agrego */
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  standalone: true, /* Se agregan manualmente   standalone: true,*/
  imports: [IonicModule, RouterModule],     /*imports: [IonicModule],*/
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
                /* se agrego */
  constructor(private router:Router) { }
   /* se agrego el metodo navegar */
  navegar(){
    console.log("ingresamos al metodo");


    let pedrito: NavigationExtras = {
      state : {
        nombre:"diego",
        apellido: "cares",
        edad: 37
      }
    }
    this.router.navigate(["/perfil-alumno"], pedrito);
  }

  ngOnInit() {
  }

}
