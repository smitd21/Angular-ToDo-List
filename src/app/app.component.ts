import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-project'; //This is the title variable
  // constructor() {
  //   setTimeout(() => {
  //     this.title = 'changed-tile'; //Change of title variable after 2 secs
  //   }, 2000);
  // }
}
