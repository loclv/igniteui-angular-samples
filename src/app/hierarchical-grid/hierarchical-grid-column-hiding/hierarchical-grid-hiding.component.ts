import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxRowIslandComponent, IgxHierarchicalGridComponent } from "igniteui-angular";
import { SINGERS } from '../data';

@Component({
    selector: "hierarchical-grid-hiding",
    styleUrls: ["./hierarchical-grid-hiding.component.scss"],
    templateUrl: "hierarchical-grid-hiding.component.html"
})

export class HGridColumnHidingSampleComponent implements OnInit {
    public localdata;

    @ViewChild('layout1')
    layout1: IgxRowIslandComponent;

    @ViewChild('hGrid')
    hGrid: IgxHierarchicalGridComponent;

    constructor() {}
    
    public ngOnInit(): void {
        this.localdata = SINGERS;
    }

    public ngAfterViewInit() {
        this.hGrid.toolbar.columnHidingUI.columnsAreaMaxHeight = "200px";
    }

}
