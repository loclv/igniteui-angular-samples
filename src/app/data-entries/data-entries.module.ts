import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IgxButtonGroupModule, IgxButtonModule, IgxCheckboxModule, IgxComboModule,
    IgxDatePickerModule, IgxDropDownModule, IgxIconModule, IgxInputGroupModule,
    IgxNavbarModule, IgxRadioModule, IgxRippleModule, IgxSwitchModule,
    IgxTimePickerModule, IgxToggleModule} from "igniteui-angular";
import { ButtonGroupSample1Component } from "./buttonGroup/button-group-sample-1/button-group-sample-1.component";
import { ButtonGroupSample2Component } from "./buttonGroup/button-group-sample-2/button-group-sample-2.component";
import { ButtonGroupSample3Component } from "./buttonGroup/button-group-sample-3/button-group-sample-3.component";
import { ButtonsSample1Component } from "./buttons/buttons-sample-1/buttons-sample-1.component";
import { ButtonsSample2Component } from "./buttons/buttons-sample-2/buttons-sample-2.component";
import { ButtonsSample3Component } from "./buttons/buttons-sample-3/buttons-sample-3.component";
import { ButtonsSample4Component } from "./buttons/buttons-sample-4/buttons-sample-4.component";
import { ButtonsSample5Component } from "./buttons/buttons-sample-5/buttons-sample-5.component";
import { ButtonsSample6Component } from "./buttons/buttons-sample-6/buttons-sample-6.component";
import { ButtonsSample7Component } from "./buttons/buttons-sample-7/buttons-sample-7.component";
import { CheckboxSample1Component } from "./checkbox/checkbox-sample-1/checkbox-sample-1.component";
import { CheckboxSample2Component } from "./checkbox/checkbox-sample-2/checkbox-sample-2.component";
import { DataEntriesRoutingModule } from "./data-entries-routing.module";
import { DropdownMenuComponent } from "./dropdown/dropdown-menu/dropdown-menu.component";
import { DropDownSample1Component } from "./dropdown/dropdown-sample-1/dropdown-sample-1.component";
import { DropDownSample2Component } from "./dropdown/dropdown-sample-2/dropdown-sample-2.component";
import { DropDownSample3Component } from "./dropdown/dropdown-sample-3/dropdown-sample-3.component";
import { DropDownSample4Component } from "./dropdown/dropdown-sample-4/dropdown-sample-4.component";
import { InputGroupSample1Component } from "./input-group/input-group-sample-1/input-group-sample-1.component";
import { InputGroupSample2Component } from "./input-group/input-group-sample-2/input-group-sample-2.component";
import { InputGroupSample3Component } from "./input-group/input-group-sample-3/input-group-sample-3.component";
import { InputGroupSample4Component } from "./input-group/input-group-sample-4/input-group-sample-4.component";
import { InputGroupSample5Component } from "./input-group/input-group-sample-5/input-group-sample-5.component";
import { InputGroupSample6Component } from "./input-group/input-group-sample-6/input-group-sample-6.component";
import { ReactiveFormsSampleComponent } from "./input-group/reactive-forms/reactive-forms.component";
import { RadioGroupSampleComponent } from "./radio/radio-group-sample/radio-group-sample.component";
import { RadioSample1Component } from "./radio/radio-sample-1/radio-sample-1.component";
import { RadioSample2Component } from "./radio/radio-sample-2/radio-sample-2.component";
import { SwitchSample1Component } from "./switch/switch-sample-1/switch-sample-1.component";
import { SwitchSample2Component } from "./switch/switch-sample-2/switch-sample-2.component";

@NgModule({
    declarations: [
        ButtonGroupSample1Component,
        ButtonGroupSample2Component,
        ButtonGroupSample3Component,
        ButtonsSample1Component,
        ButtonsSample2Component,
        ButtonsSample3Component,
        ButtonsSample4Component,
        ButtonsSample5Component,
        ButtonsSample6Component,
        ButtonsSample7Component,
        CheckboxSample1Component,
        CheckboxSample2Component,
        DropdownMenuComponent,
        DropDownSample1Component,
        DropDownSample2Component,
        DropDownSample3Component,
        DropDownSample4Component,
        InputGroupSample1Component,
        InputGroupSample2Component,
        InputGroupSample3Component,
        InputGroupSample4Component,
        InputGroupSample5Component,
        InputGroupSample6Component,
        ReactiveFormsSampleComponent,
        RadioGroupSampleComponent,
        RadioSample1Component,
        RadioSample2Component,
        SwitchSample1Component,
        SwitchSample2Component
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DataEntriesRoutingModule,
        IgxButtonGroupModule,
        IgxButtonModule,
        IgxIconModule,
        IgxRippleModule,
        IgxCheckboxModule,
        IgxDropDownModule,
        IgxInputGroupModule,
        IgxNavbarModule,
        IgxToggleModule,
        IgxComboModule,
        IgxDatePickerModule,
        IgxTimePickerModule,
        IgxRadioModule,
        IgxSwitchModule
    ]
})
export class DataEntriesModule { }