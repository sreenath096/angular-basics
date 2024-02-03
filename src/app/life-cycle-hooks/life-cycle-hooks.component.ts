import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.css'
})
export class LifeCycleHooksComponent {
  @Input() title = '';
  name = '';
  constructor() {
    console.log('constructor called');
    console.log('inside constructor' + this.title);
  }

  ngOnInit() {
    console.log(this.title);
    console.log('ngoninit fired');
    this.name = this.title + 'added on nginint';
  }

  // Constructor called first
  // Input properties will get initialized
  // ngOnInit will get called
  // Template will get initialized
}
