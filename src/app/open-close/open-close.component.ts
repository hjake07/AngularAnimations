import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations'
@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: [ './open-close.component.css' ],
  animations: [
    trigger('openClose',[
    state('open', style({
      height: '500px',
      opacity: 1,
      backgroundColor: 'yellow'
    })),
    state('closed', style({
      height: '50px',
      opacity: 0.5,
      backgroundColor: 'green'
    })),      transition('open => closed', [
      animate('0.5s 300ms ease-out')
    ]),
    transition('closed => open', [
      animate('0.5s 300ms ease-in')
    ])])
  ]
})
export class OpenCloseComponent {

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}