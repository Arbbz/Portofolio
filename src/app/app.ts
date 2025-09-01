import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="min-h-screen">
      <app-header />
    </div>
  `,
  imports: [HeaderComponent],
})
export class App {
  sliderValue = signal(50);

  onInput(event: Event) {
    const newValue = Number((event.target as HTMLInputElement).value);
    this.sliderValue.set(newValue);
  }
}
