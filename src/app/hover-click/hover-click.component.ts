import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-hover-click',
  standalone: true,
  imports: [],
  templateUrl: './hover-click.component.html',
  styleUrl: './hover-click.component.css'
})
export class HoverClickComponent {
  @HostBinding('class.hovered') isHovered = true;

  @HostListener('click') onClick() {
    console.log('element clicked');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }
}
