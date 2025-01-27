import { Component, OnInit, } from '@angular/core'; 
import { IonicModule } from '@ionic/angular';  /* Se agrego */
import { Router } from '@angular/router';  /* Se agrego */
import { ConsumoApiService } from '../consumo-api.service';
import { CommonModule } from '@angular/common';
import * as QRCode from 'qrcode';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,  /* Se agrego */
  imports: [IonicModule, CommonModule],  /* Se agrego */
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit  {

  /*
  Esto es del list
  curso: { codigo: string; nombre: string } | undefined;
  items: string[]=[];*/

  curso: { id: number; nombre: string; codigoSeccion:string; alumnos: any[];} | undefined;
  alumnos: any[] = []; // Cambiamos items a alumnos, para almacenar los datos de la API
  qrCode: string = ''; // Variable para almacenar el código QR generado


  constructor(private router: Router, private consumoApi: ConsumoApiService) {

    const navigation = this.router.getCurrentNavigation();
    this.curso = navigation?.extras.state?.['curso'];



  }

  ngOnInit(): void {    
    if (this.curso){
      this.generarCodigoQR();
      this.obtenerAlumnos();
    }
/*
Esto es parte del list 
this.generateItems();*/
  }

  generarCodigoQR() {
    if (!this.curso) return;

    const datos = {
      idCurso: this.curso.id,
      Nombre: this.curso.nombre,
      CodigoSeccion : this.curso.codigoSeccion,
      fecha: new Date().toLocaleDateString(), 
    }; 
    // Generar el QR con los datos y asignarlo a la variable qrCode
    QRCode.toDataURL(JSON.stringify(datos), (err, url) => {
      if (err) {
        console.error('Error generando el QR:', err);
      } else {
        this.qrCode = url;  // Asigna el QR generado a la variable
      }
    });

  }

  obtenerAlumnos() {
    if (!this.curso) return;  // Verificamos si el curso está disponible
    this.consumoApi.getAlumnos(1, this.curso.id).subscribe(  // Aquí pasamos el ID del profesor y el ID del curso
      (response) => {
        console.log('Alumnos obtenidos:', response);
        this.alumnos = response; // Actualizamos la lista de alumnos con la respuesta de la API
      },
      (error) => {
        console.error('Error al obtener los alumnos:', error);
      }
    );
  }
}

  /*
  Esto es parte del list 
  private generateItems(){
    const count = this.items.length + 1;
    for (let i =0 ; i < 50; i++) {
      this.items.push(`Alumno ${count + i}`);
      }*/

