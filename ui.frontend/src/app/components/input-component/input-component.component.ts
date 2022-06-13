import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

  @Input() type: string;
  @Input() value: string;
  @Input() input: string;

  constructor() { }

  ngOnInit(): void {
  }

}

MapTo('angularapp/components/input-component')(InputComponentComponent)