import { NgModule } from '@angular/core';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

import { ToggledListDirective } from './directives/toggle-list-directive.directive';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OpenToogleListDirective } from './directives/open-toogle-list.directive';
import { ToogleListHeightDirective } from './directives/toogle-list-height.directive';


@NgModule({
    imports: [
        NgxBootstrapIconsModule.pick(allIcons),
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        ToggledListDirective,
        OpenToogleListDirective,
        ToogleListHeightDirective
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ToggledListDirective
    ]
})
export class SharedModule { }
