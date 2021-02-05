import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { ToastrModule } from 'ngx-toastr';

import { OpenToogleListDirective } from './directives/open-toogle-list.directive';
import { ToggledListDirective } from './directives/toggle-list-directive.directive';
import { ToogleListHeightDirective } from './directives/toogle-list-height.directive';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        NgxBootstrapIconsModule.pick(allIcons),
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        ToggledListDirective,
        OpenToogleListDirective,
        ToogleListHeightDirective,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ToggledListDirective,
    ]
})
export class SharedModule { }
