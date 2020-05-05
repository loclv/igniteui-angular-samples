import { Component } from "@angular/core";

@Component({
    selector: "app-circular-styling-sample",
    styleUrls: ["./circular-styling-sample.component.scss"],
    templateUrl: "./circular-styling-sample.component.html"
})
export class CircularStylingSampleComponent {
    public currentValue: number;

    public ngOnInit() {
        this.currentValue = 0;
    }

    public addProgress() {
        this.currentValue += 10;
        if (this.currentValue > 100) {
            this.currentValue = 100;
        }
    }

    public removeProgress() {
        this.currentValue -= 10;
        if (this.currentValue < 0) {
            this.currentValue = 0;
        }
    }
}
