import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; /* Se agrego */
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';/* Se agrego */

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.page.html',
  standalone: true, /* Se agrego */
  imports: [IonicModule], /* Se agrego */
  styleUrls: ['./perfil-alumno.page.scss'],
})
export class PerfilAlumnoPage implements OnInit {
  /* Se agregaron los elementos como la variable NombreDocente y los elementos dentro del constructor */
  nombreDocente : any;
  constructor(private router:Router) { 

    this.nombreDocente = this.router.getCurrentNavigation()?.extras.state?.['nombre']
    console.log(this.router.getCurrentNavigation()?.extras.state?.['apellido'])
    console.log(this.router.getCurrentNavigation()?.extras.state?.['edad'])


  }

  ngOnInit() {
  }

}
