import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar el Ng
import { IonicModule } from '@ionic/angular'; /*Se agrego */
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ConsumoApiService } from '../consumo-api.service';
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
  cursos: any[] = []; // Inicializamos la lista vacía
  idProfesor: number | null = null; //id del profesor
  profesor: any = null; // Suponemos que este ID se obtiene en el login
  nombreProfesor: string = ''; // Variable para almacenar el nombre del docente

  /*cursos = [
    { codigo: 'PVC 1010-001-001', nombre: 'Estadistica' },
    { codigo: 'PVC 1020-002-002', nombre: 'Matemática' },
    { codigo: 'PVC 1030-003-003', nombre: 'Ingles' },
  ];*/

  constructor(private router:Router, private consumoApi: ConsumoApiService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.profesor = navigation.extras.state['profesor'] || null;
      this.idProfesor = this.profesor?.id || null;
      this.nombreProfesor = this.profesor?.nombre || '';
    }
   }

  ngOnInit(){
    if(this.profesor){
      console.log('Datos del profesor:', this.profesor)
      this.obtenerCursos();
    } else {
      console.error('ID del profesor no recibido')
    }
  }

  obtenerCursos() {
    if (!this.idProfesor) return;
    this.consumoApi.obtenerCursosProfesor(this.idProfesor).subscribe(
      (response) => {
        console.log('Cursos obtenidos:', response);
        this.cursos = response.map((curso: any) => ({
          id: curso.id,
          nombre: curso.nombre,
          codigoSeccion: `${curso.codigo}-${curso.seccion}`, // Concatenamos código y sección
          alumnos: curso.alumnos,
        }));
      },
      (error) => {
        console.error('Error al obtener los cursos:', error);
      }
    );
  }

  navegar2(curso: { codigoSeccion: string; nombre: string; alumnos: any; }) {
    this.router.navigate(['/home'], {
      state: {
        curso: curso, // Pasamos el curso completo como objeto
      },
    });

    console.log('Card clickeado:', curso);
  }
}



    /*Se agrego este metodo para cambiar al page qr 
    navegar2(curso: { codigo: string; nombre: string }) {
      this.router.navigate(['/home'], {
        state: {
          curso: curso, // Pasamos el curso completo como objeto
        },
      });

      console.log('Card clickeado');
       
      let pedrito: NavigationExtras = {
        state : {
        nombre:"diego",
        apellido: "cares",
        edad: 37
      }
    }      
    this.router.navigate(["/home"], pedrito);
  }*/
