import { Component, ElementRef, ViewChild } from "@angular/core";
import {
    GlobalPositionStrategy,
    IgxDragDirective,
    IgxDragLocation,
    IgxToggleDirective,
    NoOpScrollStrategy,
    OverlaySettings } from "igniteui-angular";

@Component({
  selector: "drag-dialog-sample",
  templateUrl: "./drag-dialog-sample.component.html",
  styleUrls: ["./drag-dialog-sample.component.scss"]
})
export class DragDialogSampleComponent {
  public toggleStartPageX;
  public toggleStartPageY;
  @ViewChild("toggleForm", { static: true })
  public toggleForm: IgxToggleDirective;

  @ViewChild("toggleForm", { read: IgxDragDirective, static: true })
  public toggleFormDrag: IgxDragDirective;

  @ViewChild("dialogButton", { static: true })
  public buttonElement: ElementRef;

  private overlaySettings: OverlaySettings = {
    positionStrategy: new GlobalPositionStrategy(),
    scrollStrategy: new NoOpScrollStrategy(),
    modal: true,
    closeOnOutsideClick: true
};

  constructor() {}

  public openDialog() {
    this.toggleForm.open(this.overlaySettings);
    if (!this.toggleStartPageX && !this.toggleStartPageY) {
        this.toggleStartPageX = this.toggleFormDrag.pageX;
        this.toggleStartPageY = this.toggleFormDrag.pageY;
    }
    this.toggleFormDrag.setLocation(new IgxDragLocation(this.toggleStartPageX, this.toggleStartPageY));
  }
}