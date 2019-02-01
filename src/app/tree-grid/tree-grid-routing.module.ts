import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
    TreeGridBatchEditingSampleComponent
} from "./tree-grid-batch-editing/tree-grid-batch-editing-sample.component";
import {
    TreeGridChilddatakeySampleComponent
} from "./tree-grid-childdatakey-sample/tree-grid-childdatakey-sample.component";
import {
    TreeGridColumnHidingSampleComponent
} from "./tree-grid-column-hiding-sample/tree-grid-column-hiding-sample.component";
import {
    TreeGridColumnHidingToolbarSampleComponent
} from "./tree-grid-column-hiding-toolbar-sample/tree-grid-column-hiding-toolbar-sample.component";
import {
    TreeGridColumnMovingSampleComponent
} from "./tree-grid-column-moving-sample/tree-grid-column-moving-sample.component";
import {
    TreeGridColumnPinningSampleComponent
} from "./tree-grid-column-pinning-sample/tree-grid-column-pinning-sample.component";
import {
    TreeGridColumnResizingSampleComponent
} from "./tree-grid-column-resizing-sample/tree-grid-column-resizing-sample.component";
import {
    TreeGridConditionalCellStyleComponent
} from "./tree-grid-conditional-cell-style-sample/tree-grid-conditional-cell-style-sample.component";
import {
    TreeGridDisplaydensitySampleComponent
} from "./tree-grid-displaydensity-sample/tree-grid-displaydensity-sample.component";
import { TreeGridEmployeesSampleComponent } from "./tree-grid-employees/tree-grid-employees-sample.component";
import { TreeGridFilteringSampleComponent } from "./tree-grid-filtering-sample/tree-grid-filtering-sample.component";
import {
    TreeGridMultiColumnHeadersSampleComponent
} from "./tree-grid-multi-column-headers-sample/tree-grid-multi-column-headers-sample.component";
import {
    TreeGridPrimaryforeignkeySampleComponent
} from "./tree-grid-primaryforeignkey-sample/tree-grid-primaryforeignkey-sample.component";
import { treeGridRoutesData } from "./tree-grid-routes-data";
import { TreeGridRowEditSampleComponent } from "./tree-grid-row-edit/tree-grid-row-editing-sample.component";
import { TreeGridSearchSampleComponent } from "./tree-grid-search-sample/tree-grid-search-sample.component";
import { TreeGridSelectionSampleComponent } from "./tree-grid-selection-sample/tree-grid-selection-sample.component";
import { TreeGridSortingSampleComponent } from "./tree-grid-sorting/tree-grid-sorting-sample.component";
import { TreeGridSummarySampleComponent } from "./tree-grid-summary/tree-grid-summary-sample.component";
import {
    TreeGridToolbarSample1Component
} from "./tree-grid-toolbar-sample-1/tree-grid-toolbar-sample-1.component";
import {
    TreeGridToolbarSample2Component
} from "./tree-grid-toolbar-sample-2/tree-grid-toolbar-sample-2.component";
import {
    TreeGridToolbarSample3Component
} from "./tree-grid-toolbar-sample-3/tree-grid-toolbar-sample-3.component";
import {
    TreeGridVirtualizationSampleComponent
} from "./tree-grid-virtualization-sample/tree-grid-virtualization-sample.component";

export const treeGridRoutes: Routes = [
    {
        component: TreeGridChilddatakeySampleComponent,
        data: treeGridRoutesData["treegrid-childdatakey"],
        path: "treegrid-childdatakey"
    },
    {
        component: TreeGridPrimaryforeignkeySampleComponent,
        data: treeGridRoutesData["treegrid-primaryforeignkey"],
        path: "treegrid-primaryforeignkey"
    },
    {
        component: TreeGridRowEditSampleComponent,
        data: treeGridRoutesData["treegrid-row-edit"],
        path: "treegrid-row-edit"
    },
    {
        component: TreeGridBatchEditingSampleComponent,
        data: treeGridRoutesData["treegrid-batchediting"],
        path: "treegrid-batchediting"
    },
    {
        component: TreeGridEmployeesSampleComponent,
        data: treeGridRoutesData["treegrid-employees"],
        path: "treegrid-employees"
    },
    {
        component: TreeGridSearchSampleComponent,
        data: treeGridRoutesData["treegrid-search"],
        path: "treegrid-search"
    },
    {
        component: TreeGridColumnHidingSampleComponent,
        data: treeGridRoutesData["treegrid-column-hiding"],
        path: "treegrid-column-hiding"
    },
    {
        component: TreeGridColumnHidingToolbarSampleComponent,
        data: treeGridRoutesData["treegrid-column-hiding-toolbar"],
        path: "treegrid-column-hiding-toolbar"
    },
    {
        component: TreeGridSelectionSampleComponent,
        data: treeGridRoutesData["treegrid-selection"],
        path: "treegrid-selection"
    },
    {
        component: TreeGridSortingSampleComponent,
        data: treeGridRoutesData["treegrid-sorting"],
        path: "treegrid-sorting"
    },
    {
        component: TreeGridColumnMovingSampleComponent,
        data: treeGridRoutesData["treegrid-column-moving"],
        path: "treegrid-column-moving"
    },
    {
        component: TreeGridColumnPinningSampleComponent,
        data: treeGridRoutesData["treegrid-column-pinning"],
        path: "treegrid-column-pinning"
    },
    {
        component: TreeGridColumnResizingSampleComponent,
        data: treeGridRoutesData["treegrid-column-resizing"],
        path: "treegrid-column-resizing"
    },
    {
        component: TreeGridFilteringSampleComponent,
        data: treeGridRoutesData["treegrid-filtering"],
        path: "treegrid-filtering"
    },
    {
        component: TreeGridMultiColumnHeadersSampleComponent,
        data: treeGridRoutesData["treegrid-multi-column-headers"],
        path: "treegrid-multi-column-headers"
    },
    {
        component: TreeGridVirtualizationSampleComponent,
        data: treeGridRoutesData["tree-grid-virtualization-sample"],
        path: "tree-grid-virtualization-sample"
    },
    {
        component: TreeGridDisplaydensitySampleComponent,
        data: treeGridRoutesData["treegrid-display-density"],
        path: "treegrid-display-density"
    },
    {
        component: TreeGridToolbarSample1Component,
        data: treeGridRoutesData["treegrid-toolbar-1"],
        path: "treegrid-toolbar-1"
    },
    {
        component: TreeGridToolbarSample2Component,
        data: treeGridRoutesData["treegrid-toolbar-2"],
        path: "treegrid-toolbar-2"
    },
    {
        component: TreeGridToolbarSample3Component,
        data: treeGridRoutesData["treegrid-toolbar-3"],
        path: "treegrid-toolbar-3"
    },
    {
        component: TreeGridSummarySampleComponent,
        data: treeGridRoutesData["treegrid-summary"],
        path: "treegrid-summary"
    },
    {
        component: TreeGridConditionalCellStyleComponent,
        data: treeGridRoutesData["tree-grid-conditional-cell-style-sample"],
        path: "tree-grid-conditional-cell-style-sample"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(treeGridRoutes)
    ]
})
export class TreeGridRoutingModule { }
