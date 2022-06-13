import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  @Input() username: string;

  constructor() { }

  ngOnInit(): void {
  }

}

MapTo('angularapp/components/not-found')(NotFoundComponent);