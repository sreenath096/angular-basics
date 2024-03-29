import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import ProfileComponent from './profile.component';
import CounterComponent from './Counter/Counter.component';
import { GetterInputComponent } from './getter-input/getter-input.component';
import { PanelComponent } from './panel/panel.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HoverClickComponent } from './hover-click/hover-click.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProfileComponent, CounterComponent,
    GetterInputComponent, PanelComponent, CardComponent, HoverClickComponent,
    LifeCycleHooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = { name: 'angular-basics' };
  counter: number = 20;
  receivedDataFromChild = '';
  isActive = true;

  dataReceived(data: string) {
    this.receivedDataFromChild = data;
  }

  changeTitle() {
    this.title.name = 'random string ' + Math.random();
  }
  toggleHook() {
    this.isActive = !this.isActive;
  }
  updateCounter() {
    this.counter++;
  }
}
