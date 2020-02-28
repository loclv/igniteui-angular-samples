import { Component } from "@angular/core";
import { ButtonGroupAlignment } from "igniteui-angular";

@Component({
  selector: "app-layout-content-space",
  styleUrls: ["./layout-content-space.component.scss"],
  templateUrl: "./layout-content-space.component.html"
})

export class LayoutContentSpaceComponent {
    public alignment = ButtonGroupAlignment.horizontal;
    public rippleColor = "grey";
    public layout = "space-between";
}
