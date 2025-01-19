import { Component, OnInit, } from '@angular/core'; 
import { InfiniteScrollCustomEvent, IonicModule } from '@ionic/angular';  /* Se agrego */
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
  items: string[]=[];
  constructor(private router: Router) {

    const navigation = this.router.getCurrentNavigation();
    this.curso = navigation?.extras.state?.['curso'];


    this.generateItems();
  }
  private generateItems(){
    const count = this.items.length + 1;
    for (let i =0 ; i < 50; i++) {
      this.items.push(`Alumno ${count + i}`);

    }
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }



  ngOnInit(){
  }
}
