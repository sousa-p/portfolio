import { Component, OnInit } from '@angular/core';
import {
  AnimationMetadata,
  animate,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
@Component({
  selector: 'app-section-home',
  templateUrl: './section-home.component.html',
  styleUrls: ['./section-home.component.scss'],
  animations: [
    trigger('fadeIn-1', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
    trigger('fadeIn-2', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('900ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
    trigger('fadeIn-3', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1200ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
    trigger('fadeIn-4', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms 600ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
    trigger('fadeIn-5', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms 1200ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SectionHomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
