import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxRowIslandComponent, IgxHierarchicalGridComponent, IgxColumnComponent } from "igniteui-angular";
import { CUSTOMERS } from '../data';

@Component({
    selector: "hierarchical-grid-moving",
    styleUrls: ["./hierarchical-grid-moving.component.scss"],
    templateUrl: "hierarchical-grid-moving.component.html"
})

export class HGridColumnMovingSampleComponent implements OnInit {
    public localdata;

    @ViewChild('layout1')
    layout1: IgxRowIslandComponent;

    @ViewChild('hGrid')
    hGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = CUSTOMERS;
    }
    public ngOnInit(): void {

    }

    public toggleColumn(col: IgxColumnComponent) {
        col.pinned ? col.unpin() : col.pin();
    }

}
