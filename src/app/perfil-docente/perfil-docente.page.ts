import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar el Ng
import { IonicModule } from '@ionic/angular'; /*Se agrego */
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-perfil-docente',
  templateUrl: './perfil-docente.page.html',
  standalone: true,  /*Se agrego */ /*Se agrego CommonModule para usar elementos Ng */
  imports: [IonicModule, RouterModule,CommonModule ],  /*Se agrego */
  styleUrls: ['./perfil-docente.page.scss'],

})
export class PerfilDocentePage implements OnInit {

  fechaHoy: string = new Date().toLocaleDateString();

  cursos = [
    { codigo: 'PVC 1010-001-001', nombre: 'Estadistica' },
    { codigo: 'PVC 1020-002-002', nombre: 'Matemática' },
    { codigo: 'PVC 1030-003-003', nombre: 'Ingles' },
  ];

  constructor(private router:Router) { }

    /*Se agrego este metodo para cambiar al page qr */
    navegar2(curso: { codigo: string; nombre: string }) {
      this.router.navigate(['/home'], {
        state: {
          curso: curso, // Pasamos el curso completo como objeto
        },
      });

      console.log('Card clickeado');
       
      /*let pedrito: NavigationExtras = {
        state : {
        nombre:"diego",
        apellido: "cares",
        edad: 37
      }
    }      
    this.router.navigate(["/home"], pedrito);*/
  }
  ngOnInit(){
  }

}
