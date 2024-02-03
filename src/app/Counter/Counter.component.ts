import { Component, Input, booleanAttribute } from '@angular/core';
import { changeValue, trimValue } from './Counter.service';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export default class CounterComponent {
  @Input({ required: true, transform: changeValue }) count: number = 0;

  @Input({ transform: trimValue }) message: string = '';

  @Input({ transform: booleanAttribute }) showcounter: boolean = false;
}