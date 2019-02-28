import { Component } from "@angular/core";
import { TimePickerInteractionMode } from "igniteui-angular";

@Component({
    selector: "app-timepicker-dropdown",
    styleUrls: ["./timepicker-dropdown.component.scss"],
    templateUrl: "./timepicker-dropdown.component.html"
})
export class TimepickerDropdownComponent {
    public mode: TimePickerInteractionMode = TimePickerInteractionMode.dropdown;
    public format: string = "hh:mm tt";
    public date: Date = new Date(2018, 10, 27, 17, 45, 0, 0);

    constructor() { }
}