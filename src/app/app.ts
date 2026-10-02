import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteHeader } from './components/componente-header/componente-header';
import { ComponenteMain } from './components/componente-main/componente-main';

@Component({
  imports: [RouterOutlet, ComponenteHeader, ComponenteMain],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('hospital-dr-sano');
}
