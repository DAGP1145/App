import { Component, OnInit, } from '@angular/core'; 
import { IonicModule } from '@ionic/angular';  /* Se agrego */
import { Router } from '@angular/router';  /* Se agrego */

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,  /* Se agrego */
  imports: [IonicModule],  /* Se agrego */
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  curso: { codigo: string; nombre: string } | undefined;

  constructor(private router: Router) {

    const navigation = this.router.getCurrentNavigation();
    this.curso = navigation?.extras.state?.['curso'];
  }



  ngOnInit(){
  }
}
