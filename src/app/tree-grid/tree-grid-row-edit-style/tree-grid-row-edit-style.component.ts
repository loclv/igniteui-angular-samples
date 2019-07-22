import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
import { generateEmployeeFlatData, IEmployee } from "../data/employees-flat";

@Component({
    selector: "app-tree-grid-row-edit-style",
    styleUrls: ["tree-grid-row-edit-style.component.scss"],
    templateUrl: "tree-grid-row-edit-style.component.html"
})
export class TreeGridRowEditStyleComponent implements OnInit {

    public data: IEmployee[];
    public columns: any[];

    @ViewChild("treeGrid", { static: true }) public treeGrid1: IgxTreeGridComponent;
    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();

        this.columns = [
            // tslint:disable:max-line-length
            { field: "Name", label: "Full Name", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "string" },
            { field: "Age", label: "Age", resizable: false, movable: false, sortable: false, filterable: false, editable: true, dataType: "number" },
            { field: "Title", label: "Title", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "string" },
            { field: "HireDate", label: "Hire Date", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "date" }
        ];
    }
}