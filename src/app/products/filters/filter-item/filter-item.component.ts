import { AfterViewInit, Component, Input } from '@angular/core';
import { Filter } from 'src/app/types/account';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent {

  @Input() filter!: Filter;

}
