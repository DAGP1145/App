import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; /*Se agrego */
@Component({
  selector: 'app-perfil-docente',
  templateUrl: './perfil-docente.page.html',
  standalone: true,  /*Se agrego */
  imports: [IonicModule],  /*Se agrego */
  styleUrls: ['./perfil-docente.page.scss'],
})
export class PerfilDocentePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
