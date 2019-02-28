import { Component, OnInit, ViewChild } from "@angular/core";
import {
    IgxButtonGroupComponent, IgxNumberSummaryOperand, IgxSummaryOperand, IgxSummaryResult, IgxTreeGridComponent
} from "igniteui-angular";
import { EMPLOYEE_FLAT_DATA_DETAILED } from "../data/employees-flat-detailed";

class CustomNumberSummary extends IgxSummaryOperand {

    constructor() {
        super();
    }
    public operate(data?: any[]): IgxSummaryResult[] {
        const result = super.operate(data);
        result.push({
            key: "Min",
            label: "Min",
            summaryResult: IgxNumberSummaryOperand.min(data)
        });
        result.push({
            key: "max",
            label: "Max",
            summaryResult: IgxNumberSummaryOperand.max(data)
        });
        return result;
    }
}

@Component({
    selector: "app-tree-grid-displaydensity-sample",
    styleUrls: ["./tree-grid-displaydensity-sample.component.scss"],
    templateUrl: "./tree-grid-displaydensity-sample.component.html"
})
export class TreeGridDisplaydensitySampleComponent implements OnInit {

    @ViewChild("treeGrid", { read: IgxTreeGridComponent })
    public treeGrid: IgxTreeGridComponent;
    @ViewChild(IgxButtonGroupComponent) public buttonGroup: IgxButtonGroupComponent;
    public data;
    public density = "compact";
    public displayDensities;
    public numberSummaries = CustomNumberSummary;

    public ngOnInit() {
        this.data = EMPLOYEE_FLAT_DATA_DETAILED();
        this.displayDensities = [
            {
                label: "compact",
                selected: this.density === "compact",
                togglable: true
            },
            {
                label: "cosy",
                selected: this.density === "cosy",
                togglable: true
            },
            {
                label: "comfortable",
                selected: this.density === "comfortable",
                togglable: true
            }
        ];
    }

    public selectDensity(event) {
        this.density = this.displayDensities[event.index].label;
        this.treeGrid.displayDensity = this.displayDensities[event.index].label;
        this.treeGrid.reflow();
    }
}