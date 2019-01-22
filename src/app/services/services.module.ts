// tslint:disable:max-line-length
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxCsvExporterService, IgxExcelExporterService, IgxGridModule, IgxTimePickerModule } from "igniteui-angular";
import { CsvExportSample1Component } from "./export-csv/csv-export-sample-1/csv-export-sample-1.component";
import { CsvExportComponent } from "./export-csv/csv-export.component";
import { ExcelExportSample1Component } from "./export-excel/excel-export-sample-1/excel-export-sample-1.component";
import { ExcelExportComponent } from "./export-excel/excel-export.component";
import { LocalizationSample1Component } from "./localization-samples/localization-sample-1/localization-sample-1.component";
import { LocalizationSample2Component } from "./localization-samples/localization-sample-2/localization-sample-2.component";
import { LocalizationSample3Component } from "./localization-samples/localization-sample-3/localization-sample-3.component";
import { ServicesRoutingModule } from "./services-routing.module";
// tslint:enable:max-line-length

@NgModule({
    declarations: [
        CsvExportComponent,
        CsvExportSample1Component,
        ExcelExportComponent,
        ExcelExportSample1Component,
        LocalizationSample1Component,
        LocalizationSample2Component,
        LocalizationSample3Component
    ],
    imports: [
        CommonModule,
        FormsModule,
        ServicesRoutingModule,
        IgxGridModule,
        IgxTimePickerModule
    ],
    providers: [
        IgxCsvExporterService,
        IgxExcelExporterService
    ]
})
export class ServicesModule {}