import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; /* Se agrego */
@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  standalone: true,  /* Se agrego */
  imports: [IonicModule],  /* Se agrego */
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
