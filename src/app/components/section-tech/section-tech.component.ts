import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-tech',
  templateUrl: './section-tech.component.html',
  styleUrls: ['./section-tech.component.scss'],
})
export class SectionTechComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  frontEndStacks: String[] = [
    'TypeScript',
    'Angular',
    'Ionic',
    'Vue.js',
    'Flutter',
    'Others...',
  ];

  backEndStacks: String[] = [
    'PHP',
    'Laravel',
    'Lumen',
    'MySQL',
    'RESTfulAPI',
    'Others...',
  ];

  tools: String[] = [
    'Git',
    'Github',
    'Figma',
    'Photoshop',
    'Docker',
    'Others...',
  ];
}
