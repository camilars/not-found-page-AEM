import { Component, Input, OnInit } from "@angular/core";
import { MapTo } from "@adobe/aem-angular-editable-components";
@Component({
  selector: "app-title-component",
  templateUrl: "./title-component.component.html",
  styleUrls: ["./title-component.component.css"],
})
export class TitleComponentComponent implements OnInit {
  @Input() titleComponent: string;
  @Input() size: string;
  constructor() {}

  ngOnInit(): void {}

  get titleClasses() {
    const classes = ["title-font-" + this.size];
    return classes;
  }
}

MapTo("angularapp/components/title-component")(TitleComponentComponent);
