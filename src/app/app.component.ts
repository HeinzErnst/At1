import { Component } from '@angular/core';
import {HttpModule} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HttpModule]
})

export class AppComponent {
 title = 'Categories';

//  hero: Hero = {
//   id: 1,
//   name: 'Windstorm'
//  };


}
