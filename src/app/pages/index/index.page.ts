import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  hideFab: Boolean = true;

  onScroll(event: any) {
    const content = event.target;
    this.hideFab = content.scrollTop <= content.offsetHeight;
  }
}
