import { AfterContentInit, ContentChild, Directive, HostBinding, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CloseClickOutsideDirective } from './close-click-outside.directive';
import { OpenToogleListDirective } from './open-toogle-list.directive';
import { ToogleListHeightDirective } from './toogle-list-height.directive';

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

    @ContentChild(CloseClickOutsideDirective, {
        read: CloseClickOutsideDirective
      })
    clickOutside!: CloseClickOutsideDirective;

    subscribtions$: Subscription[] = [];

    ngAfterContentInit(): void {
        this.setSubscriptions();
    }

    returnToggleButtonEmitter(): Subscription {
        return this.toggleButton.toggleButton.subscribe(() => {
            this.opened = !this.opened;
            this.toggledList.number = this.opened ? this.toggledList.maxHeight : 0;
        });
    }

    setClickCloseEvent(): Subscription {
        return this.clickOutside.closeElement.subscribe(
            () => {
                this.opened = false;
                this.toggledList.number = 0;
            }
        );
    }

    setSubscriptions(): void {
        this.subscribtions$.push(this.returnToggleButtonEmitter());

        if (this.clickOutside) {
            this.subscribtions$.push(this.setClickCloseEvent());
        }
    }

    ngOnDestroy(): void {
        this.subscribtions$.forEach(
            sub => sub.unsubscribe()
        );
    }

}
