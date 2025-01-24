import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.page.html',
  standalone: true,  /* Se agrego */
  imports: [IonicModule],  /* Se agrego */
  styleUrls: ['./page404.page.scss'],
})
export class Page404Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
