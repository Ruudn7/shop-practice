import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { ToastrModule } from 'ngx-toastr';

import { CloseClickOutsideDirective } from './directives/close-click-outside.directive';
import { FiltersContainerDirective } from './directives/filters-container.directive';
import { FiltersItemDirective } from './directives/filters-item.directive';
import { ListFiltersDirective } from './directives/list-filters.directive';
import { OpenToogleListDirective } from './directives/open-toogle-list.directive';
import { ToggledListDirective } from './directives/toggle-list-directive.directive';
import { ToogleListHeightDirective } from './directives/toogle-list-height.directive';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        NgxBootstrapIconsModule.pick(allIcons),
        ToastrModule.forRoot(),
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        ToggledListDirective,
        OpenToogleListDirective,
        ToogleListHeightDirective,
        CloseClickOutsideDirective,
        ListFiltersDirective,
        FiltersContainerDirective,
        FiltersItemDirective,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ToggledListDirective,
        ListFiltersDirective,
        FiltersContainerDirective,
        FiltersItemDirective
    ]
})
export class SharedModule { }
