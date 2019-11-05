import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent, NoopFilteringStrategy, NoopSortingStrategy } from "igniteui-angular";
import { Subject } from "rxjs";
import { debounceTime, takeUntil } from "rxjs/operators";
import { RemoteFilteringService } from "../services/remoteFilteringService";

const DEBOUNCE_TIME = 300;

@Component({
    providers: [RemoteFilteringService],
    selector: "app-grid-remote-filtering-sample",
    styleUrls: ["./remote-filtering-sample.component.scss"],
    templateUrl: "./remote-filtering-sample.component.html"
})
export class RemoteFilteringSampleComponent implements OnInit {
    public remoteData: any;
    @ViewChild("grid", { static: true }) public grid: IgxGridComponent;
    public noopFilterStrategy = NoopFilteringStrategy.instance();
    public noopSortStrategy = NoopSortingStrategy.instance();

    private _prevRequest: any;
    private _chunkSize: number;
    private destroy$ = new Subject<boolean>();

    constructor(private _remoteService: RemoteFilteringService, public cdr: ChangeDetectorRef) { }

    public ngOnInit(): void {
        this.remoteData = this._remoteService.remoteData;
    }

    public ngAfterViewInit() {
        const filteringExpr = this.grid.filteringExpressionsTree.filteringOperands;
        const sortingExpr = this.grid.sortingExpressions[0];
        this._chunkSize = Math.ceil(parseInt(this.grid.height, 10) / this.grid.rowHeight);
        this.grid.isLoading = true;

        this._remoteService.getData(
        {
            chunkSize: this._chunkSize,
            startIndex: this.grid.virtualizationState.startIndex
        },
        filteringExpr,
        sortingExpr,
        (data) => {
            this.grid.totalItemCount = data["@odata.count"];
            this.grid.isLoading = false;
        });

        this.grid.onDataPreLoad.pipe(
            debounceTime(DEBOUNCE_TIME),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.processData();
        });
        this.grid.filteringExpressionsTreeChange.pipe(
            debounceTime(DEBOUNCE_TIME),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.processData();
        });
        this.grid.sortingExpressionsChange.pipe(
            debounceTime(DEBOUNCE_TIME),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.processData();
        });
    }

    public processData() {
        if (this._prevRequest) {
            this._prevRequest.unsubscribe();
        }

        this.grid.isLoading = true;

        const virtualizationState = this.grid.virtualizationState;
        const filteringExpr = this.grid.filteringExpressionsTree.filteringOperands;
        const sortingExpr = this.grid.sortingExpressions[0];

        this._prevRequest = this._remoteService.getData(
            {
                chunkSize: this._chunkSize,
                startIndex: virtualizationState.startIndex
            },
            filteringExpr,
            sortingExpr,
            (data) => {
                this.grid.totalItemCount = data["@odata.count"];
                this.grid.isLoading = false;
            });
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return "$" + value.toFixed(2);
    }

    public ngOnDestroy() {
        if (this._prevRequest) {
            this._prevRequest.unsubscribe();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
}
