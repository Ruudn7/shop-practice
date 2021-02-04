import { ToogleListHeightDirective } from './toogle-list-height.directive';
import { AfterContentInit, ContentChild, Directive, HostBinding, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { OpenToogleListDirective } from './open-toogle-list.directive';

@Directive({
    selector: '[appToggleListDirective]',
})

export class ToggledListDirective implements AfterContentInit, OnDestroy {

    @HostBinding('class.show')
    opened = false;

    @ContentChild(OpenToogleListDirective, {
        read: OpenToogleListDirective
      })
    toggleButton: OpenToogleListDirective = new OpenToogleListDirective();

    @ContentChild(ToogleListHeightDirective, {
        read: ToogleListHeightDirective
      })
    toggledList!: ToogleListHeightDirective;

    subscribe$ = new Subscription();

    ngAfterContentInit(): void {
        this.subscribe$ = this.toggleButton.toggleButton.subscribe(() => {
            this.opened = !this.opened;
            this.toggledList.number = this.opened ? this.toggledList.maxHeight : 0;
        });
    }

    ngOnDestroy(): void {
        this.subscribe$.unsubscribe();
    }

}
