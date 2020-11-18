import {
    Component,
    HostListener,
    OnDestroy,
    OnInit,
    ViewChild,
    Inject,
    ElementRef
} from "@angular/core";
import {
    IgxGridComponent,
    IgxNumberSummaryOperand,
    IgxStringFilteringOperand,
    IgxSummaryResult,
    IgxGridCellComponent,
    OverlaySettings,
    IgxOverlayService,
    AbsolutePosition
} from "igniteui-angular";
import { athletesData } from "./../services/data";

@Component({
    selector: "app-grid",
    styleUrls: ["./grid.component.scss"],
    templateUrl: "./grid.component.html"
})
export class GridComponent implements OnInit, OnDestroy {

    @ViewChild("grid1", { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    @ViewChild("winnerAlert", { static: true })
    public winnerAlert: ElementRef;

    @ViewChild("finishedAlert", { static: true })
    public finishedAlert: ElementRef;

    public topSpeedSummary = CustomTopSpeedSummary;
    public bnpSummary = CustomBPMSummary;
    public speedSummary = CustomSpeedSummary;
    public localData: any[];
    public isFinished = false;
    public hasWinner = false;
    public athleteColumnWidth = "30%";
    private _live = true;
    private _timer;
    private windowWidth: any;
    private _overlayId: string;
    public showOverlay = false;
    public overlaySettings: OverlaySettings;
    public winner = { Avatar: null, Name: null };
    public top3 = [];

    get live() {
        return this._live;
    }

    set live(val) {
        this._live = val;
        if (this._live) {
            this._timer = setInterval(() => this.ticker(), 1500)
        } else {
            clearInterval(this._timer);
        }
    }

    get showWinnerOverlay() {
        return this.showOverlay && this.hasWinner && !this.isFinished;
    }

    get showFinishedOverlay() {
        return this.showOverlay && this.isFinished && this.live;
    }

    get hideAthleteNumber() {
        return this.windowWidth && this.windowWidth < 960;
    }
    get hideBeatsPerMinute() {
        return this.windowWidth && this.windowWidth < 860;
    }

    constructor(@Inject(IgxOverlayService) public overlayService: IgxOverlayService) {}
    public ngOnInit() {
        this.localData = athletesData.slice(0, 30).sort((a, b) => b.TrackProgress - a.TrackProgress);
        this.localData.forEach(rec => this.getSpeed(rec));
        this.windowWidth = window.innerWidth;
        this._timer = setInterval(() => this.ticker(), 1500)
    }

    public ngAfterViewInit() {
        this.overlaySettings = IgxOverlayService.createAbsoluteOverlaySettings(
            AbsolutePosition.Center,
            this.grid1
        );
        this.overlaySettings.modal = true;
    }

    public getValue(cell: IgxGridCellComponent): number {
        const val = cell.value;
        return val;
    }
    public ngOnDestroy() {
        clearInterval(this._timer);
    }

    public isTop3(cell): boolean {
        const top = this.grid1.page === 0 && cell.row.index < 4;
        if (top) {
            cell.row.nativeElement.classList.add("top3");
        } else {
            cell.row.nativeElement.classList.remove("top3");
        }
        return top;
    }

    public getTrophyUrl(index: number) {
        if (index === 0) {
            return 'assets/images/grid/trophy_gold.svg'
        }
        if (index === 1) {
            return 'assets/images/grid/trophy_silver.svg'
        }
        if (index === 2) {
            return 'assets/images/grid/trophy_bronze.svg'
        }
    }

    public cellSelection(evt) {
        const cell = evt.cell;
        this.grid1.selectRows([cell.row.rowID], true);
    }

    public getIconType(cell) {
        switch (cell.row.rowData.Position) {
            case "up":
                return "arrow_upward";
            case "current":
                return "arrow_forward";
            case "down":
                return "arrow_downward";
        }
    }

    public getBadgeType(cell) {
        switch (cell.row.rowData.Position) {
            case "up":
                return "success";
            case "current":
                return "warning";
            case "down":
                return "error";
        }
    }

    public getSpeed(athlete: any): any {
        athlete["Speed"] = this.addSpeedeData(athlete, 40);
    }

    public getSpeedeData(minutes?: number): any[] {
        if (minutes === undefined) {
            minutes = 20;
        }
        const speed: any[] = [];
        for (let m = 0; m < minutes; m += 3) {
            const value = this.getRandomNumber(17, 20);
            speed.push({Speed: value, Minute: m});
        }
        return speed;
    }

    public addSpeedeData(athlete, minutes?: number): any[] {
        if (minutes === undefined) {
            minutes = 20;
        }
        const speedCollection = athlete.Speed ? athlete.Speed : [];
        for (let m = 3; m <= minutes; m += 3) {
            const value = this.getRandomNumber(16, 20);
            const speed = speedCollection[speedCollection.length - 1];
            const min = speed && speed.Minute ? speed.Minute + m : m;
            speedCollection.push({Speed: value, Minute: min});
            if (speedCollection.length === 40) {
                speedCollection.shift();
            }
        }
        return speedCollection;
    }

    @HostListener("window:resize", ["$event"])
    public onResize(event) {
        this.windowWidth = event.target.innerWidth;
    }

    public filter(term) {
        this.grid1.filter("CountryName", term, IgxStringFilteringOperand.instance().condition("contains"), true);
        this.grid1.markForCheck();
    }

    private generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private ticker() {
        if (this.showWinnerOverlay || this.showFinishedOverlay) {
            this.hideAlert();
        }
        if (this.isFinished) {
            this.live = false;
            this.grid1.page = 0;
            return;
        }
        this.updateData();
        this.manageRace();
    }

    private getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }

    private manageRace() {
        // show winner alert
        if (!this.hasWinner && this.grid1.getCellByColumn(0, 'TrackProgress').value >= 85) {
            this.winner = this.grid1.getRowByIndex(0).rowData;
            this.hasWinner = true;
            this.showAlert(this.winnerAlert);
        }

        // move grid to next page to monitor players who still run
        if (this.grid1.getCellByColumn(0, 'TrackProgress').value === 100) {
            this.grid1.page = this.grid1.page + 1;
        }

        // show Top 3 players after race has finished
        if (this.localData[this.localData.length - 1].TrackProgress === 100) {
            this.top3 = this.localData.slice(0, 3);
            this.isFinished = true;
            this.showAlert(this.finishedAlert);
        }
    }

    private updateData() {
        const newData = []
        this.localData.forEach((rec, index) => {
            rec.LastPosition = index;
            if (rec.TrackProgress < 100) {
                rec.Speed = this.addSpeedeData(rec, 3);
                rec.BeatsPerMinute += this.generateRandomNumber(-5, 5);
                if (rec.Id < this.grid1.perPage + 1) {
                    rec.TrackProgress = Math.min(rec.TrackProgress + this.generateRandomNumber(15, 20), 100);
                } else {
                    rec.TrackProgress = Math.min(rec.TrackProgress + this.generateRandomNumber(7, 12), 100);
                }

            }
            newData.push({...rec});
        });

        this.localData = newData.sort((a, b) => b.TrackProgress - a.TrackProgress);
        this.localData.forEach((elem, ind) => {
            const position = elem.LastPosition - ind;
            if (position < 0) {
                elem.Position = "down";
            } else if (position === 0) {
                elem.Position = "current";
            } else {
                elem.Position = "up";
            }
        })
    }

    public showAlert(element: ElementRef) {
        this.showOverlay = true;
        this._overlayId = this.overlayService.attach(element, this.overlaySettings);
        this.overlayService.show(this._overlayId);
    }

    public hideAlert() {
        this.showOverlay = false;
        this.overlayService.hide(this._overlayId);
    }
}

class CustomTopSpeedSummary {


    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push({
            key: "max",
            label: "max",
            summaryResult: data.length ? IgxNumberSummaryOperand.max(data).toFixed(0) : null
        });

        return result;
    }
}

export class CustomBPMSummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push(
            {
                key: "average",
                label: "average",
                summaryResult: data.length ? IgxNumberSummaryOperand.average(data).toFixed(2) : null
            });

        return result;
    }
}

export class CustomSpeedSummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        data = data.reduce((acc, val) => acc.concat(val), []).map(rec => rec.Speed);
        const result = [];
        result.push(
            {
                key: "average",
                label: "average",
                summaryResult: data.length ? IgxNumberSummaryOperand.average(data).toFixed(2) : null
            });

        return result;
    }
}
