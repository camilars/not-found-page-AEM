import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.css']
})
export class ImageComponentComponent implements OnInit {

  @Input() imagePath: string;

  constructor() { }

  ngOnInit(): void {
  }

}

MapTo('angularapp/components/image-component')(ImageComponentComponent)