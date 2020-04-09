import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  public donutChartData = [{
        id: 0, // number
       // label: '',  // string
        value: 70,  // number
        color: '#ccc',  // string,
      //  iconImage: 'https://avatars.discourse.org/v2/letter/a/a8b319/45.png' // string
    }, {
        id: 1, // number
        label: '',  // string
        value: 30,  // number
        color: 'blue',  // string,
      //  iconImage: 'https://avatars.discourse.org/v2/letter/a/a8b319/45.png' // string
    }
]
}
