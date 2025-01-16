import { Component, } from '@angular/core'; 
import { IonicModule } from '@ionic/angular';  /* Se agrego */

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,  /* Se agrego */
  imports: [IonicModule],  /* Se agrego */
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

}
