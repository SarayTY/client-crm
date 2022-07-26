import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <app-page-header
      title="page not found"
      icon="bi bi-exclamation-diamond"
      description="the page cannot found"
    >
    </app-page-header>
  `,
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
