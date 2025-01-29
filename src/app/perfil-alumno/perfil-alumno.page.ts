import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; /* Se agregó */
import { RouterModule } from '@angular/router'; // Asegúrate de importar esto
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'; // Importa el servicio Camera


@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.page.html',
  standalone: true, /* Se agrego */
  imports: [IonicModule, RouterModule], /* Se agrego */
  styleUrls: ['./perfil-alumno.page.scss'],
})
export class PerfilAlumnoPage implements OnInit {
  alertButtons = ['Siguiente'];
  fechaHoy: string = new Date().toLocaleDateString();
  base64Image: string | undefined;

  constructor(private camera: Camera) {}

  ngOnInit() {}

  // Método para tomar una foto con la cámara
  camara() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData: string) => {
        this.base64Image = 'data:image/jpeg;base64,' + imageData;
        console.log('Imagen tomada:', this.base64Image);
      },
      (err: any) => {
        console.log('Error al tomar la foto:', err);
      }
    );
  }

  limpiar() {
    this.base64Image = undefined;
  }

  mostrar() {
    console.log('Mostrar información');
  }

  actualizar() {
    console.log('Actualizar información');
  }
}
