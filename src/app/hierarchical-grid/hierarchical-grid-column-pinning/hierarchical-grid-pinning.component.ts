import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxColumnComponent, IgxHierarchicalGridComponent, IgxRowIslandComponent } from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-pinning",
    styleUrls: ["./hierarchical-grid-pinning.component.scss"],
    templateUrl: "hierarchical-grid-pinning.component.html"
})

export class HGridPinningSampleComponent implements OnInit {
    public localdata;

    @ViewChild("hierarchicalGrid")
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {

    }

    public toggleColumn(col: IgxColumnComponent) {
        col.pinned ? col.unpin() : col.pin();
    }

}