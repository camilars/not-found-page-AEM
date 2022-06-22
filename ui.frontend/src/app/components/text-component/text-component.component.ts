import { MapTo } from "@adobe/aem-angular-editable-components";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-text-component",
  templateUrl: "./text-component.component.html",
  styleUrls: ["./text-component.component.css"],
})
export class TextComponentComponent implements OnInit {
  @Input() text: string;
  @Input() size: string;

  constructor() {}

  ngOnInit(): void {}

  get textClasses() {
    const classes = ["text-font-" + this.size];
    return classes;
  }
}

MapTo("angularapp/components/text-component")(TextComponentComponent);
