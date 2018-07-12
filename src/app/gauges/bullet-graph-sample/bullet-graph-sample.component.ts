import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";

import { IgxBulletGraphComponent } from "igniteui-angular-gauges/ES5/igx-bullet-graph-component";
import { IgxLinearGraphRangeComponent } from "igniteui-angular-gauges/ES5/igx-linear-graph-range-component";

@Component({
  selector: "app-bullet-graph-sample",
  styleUrls: ["./bullet-graph-sample.component.scss"],
  templateUrl: "./bullet-graph-sample.component.html"
})

export class BulletGraphSampleComponent implements AfterViewInit, OnInit {

    @ViewChild("bulletGraph")
    public bulletGraph: IgxBulletGraphComponent;
    public wasAnimated: boolean = true;

    constructor() { }

    public ngOnInit(): void { }

    public ngAfterViewInit(): void {

        // note this type script code is for demonstration purpose and
        // it is setting the same properties as in html

        // setting target values
        this.bulletGraph.targetValueBrush = "#000000";
        this.bulletGraph.targetValueBreadth = 10;
        this.bulletGraph.targetValue = 90;

        // setting performance values
        this.bulletGraph.value = 70;
        this.bulletGraph.valueInnerExtent = 0.5;
        this.bulletGraph.valueOuterExtent = 0.7;
        this.bulletGraph.valueBrush = "#000000";

        // setting scale values
        this.bulletGraph.minimumValue = 0;
        this.bulletGraph.maximumValue = 120;
        this.bulletGraph.interval = 10;

        // setting appearance of labels
        this.bulletGraph.labelInterval = 10;
        this.bulletGraph.labelExtent = 0.02;

        // setting appearance of major/minor ticks
        this.bulletGraph.minorTickCount = 5;
        this.bulletGraph.minorTickEndExtent = 0.10;
        this.bulletGraph.minorTickStartExtent = 0.20;
        this.bulletGraph.tickStartExtent = 0.20;
        this.bulletGraph.tickEndExtent = 0.05;
        this.bulletGraph.tickStrokeThickness = 2;

        // setting start/end of gauge ranges
        const range1 = new IgxLinearGraphRangeComponent();
        range1.startValue = 0;
        range1.endValue = 40;
        const range2 = new IgxLinearGraphRangeComponent();
        range2.startValue = 40;
        range2.endValue = 80;
        const range3 = new IgxLinearGraphRangeComponent();
        range3.startValue = 80;
        range3.endValue = 120;

        this.bulletGraph.rangeBrushes  = [ "#FF9800", "#F96232", "#C62828"];
        this.bulletGraph.rangeOutlines = [ "#FF9800", "#F96232", "#C62828"];
        this.bulletGraph.ranges.clear();
        this.bulletGraph.ranges.add(range1);
        this.bulletGraph.ranges.add(range2);
        this.bulletGraph.ranges.add(range3);

        // setting extent of all gauge ranges
        for (let i = 0; i < 3; i++) {
            const range = this.bulletGraph.ranges.item(i);
            range.innerStartExtent = 0.2;
            range.innerEndExtent = 0.2;
            range.outerStartExtent = 0.95;
            range.outerEndExtent = 0.95;
        }

        // setting extent of gauge scale
        this.bulletGraph.scaleBackgroundThickness = 0.5;
        this.bulletGraph.scaleBackgroundBrush = "#dbdbdb";
        this.bulletGraph.scaleBackgroundOutline = "gray";
        this.bulletGraph.scaleStartExtent = 0.05;
        this.bulletGraph.scaleEndExtent = 0.95;
        this.bulletGraph.scaleBackgroundThickness = 0;

        // setting appearance of backing fill and outline
        this.bulletGraph.backingBrush = "#f7f7f7";
        this.bulletGraph.backingOutline = "#d1d1d1";
        this.bulletGraph.backingStrokeThickness = 0;

        // enabling animation of the gauge
        this.bulletGraph.transitionDuration = 500;
    }

    public onClick(ev: Event): void {
        if (this.wasAnimated) {
            this.wasAnimated = false;
            this.bulletGraph.transitionDuration = 0;
            this.bulletGraph.isScaleInverted = false;
            this.bulletGraph.transitionDuration = 500;
            this.bulletGraph.isScaleInverted = true;
        } else {
            this.wasAnimated = true;
            this.bulletGraph.transitionDuration = 0;
            this.bulletGraph.isScaleInverted = true;
            this.bulletGraph.transitionDuration = 500;
            this.bulletGraph.isScaleInverted = false;
        }
    }

}