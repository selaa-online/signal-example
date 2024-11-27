import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'signal-example';
  counter = signal(0);

  constructor() {


  }

  increment() {
    this.counter.set(this.counter() + 1)
  }
}
