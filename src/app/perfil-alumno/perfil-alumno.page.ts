import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; /* Se agrego */
import { RouterModule } from '@angular/router'; // Asegúrate de importar esto
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';/* Se agrego */

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.page.html',
  standalone: true, /* Se agrego */
  imports: [IonicModule, RouterModule], /* Se agrego */
  styleUrls: ['./perfil-alumno.page.scss'],
})
export class PerfilAlumnoPage implements OnInit {
  /* Se agregaron los elementos como la variable NombreDocente y los elementos dentro del constructor */

  fechaHoy: string = new Date().toLocaleDateString();

  constructor() { 
/* 
   this.nombreDocente = this.router.getCurrentNavigation()?.extras.state?.['nombre']
    console.log(this.router.getCurrentNavigation()?.extras.state?.['apellido'])
    console.log(this.router.getCurrentNavigation()?.extras.state?.['edad'])
 */


  }

  ngOnInit() {
  }

}

