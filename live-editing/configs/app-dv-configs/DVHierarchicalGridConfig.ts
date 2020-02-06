// tslint:disable: max-line-length
import { IgxHierarchicalGridModule } from "igniteui-angular";
import { IgxSparklineCoreModule, IgxSparklineModule } from "igniteui-angular-charts";
import { HGridColumnResizingSampleComponent } from "../../../projects/app-lob/src/app/hierarchical-grid/hierarchical-grid-column-resizing/hierarchical-grid-resizing.component";
import { AppModuleConfig } from "../core/AppModuleConfig";
import { Config } from "../core/Config";
import { IConfigGenerator } from "../core/IConfigGenerator";

export class DVHierarchicalGridConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            additionalFiles: ["/src/app/hierarchical-grid/data.ts"],
            additionalDependencies: ["igniteui-angular-charts", "igniteui-angular-core"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxHierarchicalGridModule, HGridColumnResizingSampleComponent, IgxSparklineCoreModule, IgxSparklineModule],
                ngDeclarations: [HGridColumnResizingSampleComponent],
                ngImports: [IgxHierarchicalGridModule, IgxSparklineCoreModule, IgxSparklineModule]
            }),
            component: HGridColumnResizingSampleComponent
        }));

        return configs;
    }
}
