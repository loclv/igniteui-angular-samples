import { Component } from "@angular/core";
import { BaseInputGroupSampleComponent } from "../base-input.component";

@Component({
  selector: "app-input-group-sample-3",
  styleUrls: ["./input-group-sample-3.component.scss"],
  templateUrl: "./input-group-sample-3.component.html"
})
export class InputGroupSample3Component  extends BaseInputGroupSampleComponent {
    public user = {
        phone: undefined
    };
}
