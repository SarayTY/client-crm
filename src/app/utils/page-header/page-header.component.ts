import { Component,Input, OnInit } from '@angular/core';
import { ParagraphCapitalPipe } from 'src/app/pipes/paragraph-capital.pipe';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() title = '';
  @Input() icon = '';
  @Input() description = '';

  constructor() { }

  ngOnInit(): void {
  }

}

