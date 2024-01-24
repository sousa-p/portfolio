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
    'JavaScript',
    'TypeScript',
    'Angular',
    'Ionic',
    'Vue.js',
    'Tailwind',
    'Flutter',
    'Others...',
  ];

  backEndStacks: String[] = [
    'PHP',
    'C#',
    '.NET',
    'Laravel',
    'Lumen',
    'MySQL',
    'Node.js',
    'Others...',
  ];

  tools: String[] = [
    'Git',
    'Github',
    'Figma',
    'Photoshop',
    'Docker',
    'Linux',
    'Visual Code',
    'Others...',
  ];
}
