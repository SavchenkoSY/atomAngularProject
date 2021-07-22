import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'country-app';
  //greeting = 'Good Evening';

  greeting(timeOfDay: any){
    return `Good ${timeOfDay}`;
  }

  constructor(){};
}
