import { Component } from "@angular/core";
import { ButtonGroupAlignment } from "igniteui-angular";

@Component({
  selector: "app-layout-justify-content",
  styleUrls: ["./layout-justify-content.component.scss"],
  templateUrl: "./layout-justify-content.component.html"
})

export class LayoutJustifyContentComponent {
    public alignment = ButtonGroupAlignment.horizontal;
    public rippleColor = "grey";
    public justifyContent = "start";
}
