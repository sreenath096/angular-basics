import { Component, DestroyRef, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.css'
})
export class LifeCycleHooksComponent {
  @Input() title = { name: '' };
  @Input() counter = 0;
  name = '';
  constructor(private destroyRef: DestroyRef) {
    console.log('constructor called');

    destroyRef.onDestroy(() => {
      console.log('destroyref fired');
    });
    //console.log(this.title);
  }

  ngOnInit() {
    //console.log(this.title);
    console.log('ngoninit fired');
    setTimeout(() => {
      console.log('set time out');
      this.name = this.title.name + 'added on nginint';
    }, 2000);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngonchange fired');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngdocheck fired');
  }

  ngOnDestroy() {
    console.log('component destroyed');
  }

  // Constructor called first
  // Input properties will get initialized
  // ngOnchanges - Runs will any input properties value changes
  // Works for simple type, For reference type, on change of reference will trigger
  // property name changes in reference type will not trigger the ngOnChanges
  // ngOnInit will get called  
  // ngDoCheck - Will fired whenever template changeDetection triggers
  // Will fired when Input property changes. Avoid using it 
  // Template will get initialized  
}
