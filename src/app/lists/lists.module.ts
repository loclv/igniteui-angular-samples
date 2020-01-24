import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
    IgxAvatarModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCardModule,
    IgxComboModule,
    IgxFilterModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxListModule,
    IgxRippleModule,
    IgxSelectModule,
    IgxSliderModule,
    IgxSwitchModule,
    IgxToastModule
} from "igniteui-angular";
import { CascadingCombos } from "./combo/cascading-combos/cascading-combos.component";
import { ComboBindingComponent } from "./combo/combo-binding/combo-binding.component";
import { ComboFeatures } from "./combo/combo-features/combo-features.component";
import { ComboMainComponent } from "./combo/combo-main/combo-main.component";
import { ComboOverlayComponent } from "./combo/combo-overlay/combo-overlay.component";
import { ComboRemoteComponent } from "./combo/combo-remote/combo-remote.component";
import { ComboSingleSelectionComponent } from "./combo/combo-single-selection/combo-single-selection.component";
import { ComboStyling } from "./combo/combo-styling/combo-styling.component";
import { ComboTemplateComponent } from "./combo/combo-template/combo-template.component";
import { ListChatSampleComponent } from "./list/list-chat-sample/list-chat-sample.component";
import { ListSample1Component } from "./list/list-sample-1/list-sample-1.component";
import { ListSample2Component } from "./list/list-sample-2/list-sample-2.component";
import { ListSample3Component } from "./list/list-sample-3/list-sample-3.component";
import { ListSample4Component } from "./list/list-sample-4/list-sample-4.component";
import { ListSample5Component } from "./list/list-sample-5/list-sample-5.component";
import { ListSample6Component } from "./list/list-sample-6/list-sample-6.component";
import { ListSample7Component } from "./list/list-sample-7/list-sample-7.component";
import { ListSample8Component } from "./list/list-sample-8/list-sample-8.component";
import { ListComponent } from "./list/list.component";
import { ListsRoutingModule } from "./lists-routing.module";

@NgModule({
    declarations: [
        ListComponent,
        ListSample1Component,
        ListSample2Component,
        ListSample3Component,
        ListSample4Component,
        ListSample5Component,
        ListSample6Component,
        ListSample7Component,
        ListSample8Component,
        ListChatSampleComponent,
        CascadingCombos,
        ComboFeatures,
        ComboStyling,
        ComboMainComponent,
        ComboRemoteComponent,
        ComboTemplateComponent,
        ComboOverlayComponent,
        ComboBindingComponent,
        ComboSingleSelectionComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ListsRoutingModule,
        IgxAvatarModule,
        IgxFilterModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxListModule,
        IgxButtonModule,
        IgxSliderModule,
        IgxComboModule,
        IgxSwitchModule,
        IgxSelectModule,
        IgxToastModule,
        IgxButtonGroupModule,
        HttpClientModule,
        IgxRippleModule,
        IgxCardModule
    ]
})
export class ListsModule { }
