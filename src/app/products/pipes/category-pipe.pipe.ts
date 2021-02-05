import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    switch (value) {
      case '1':
        return 'Pierwsza kategoria';
      case '2':
        return 'Druga kategoria';
      case '3':
        return 'Trzecia kategoria';
      case '4':
        return 'Czwarta kategoria';
      case '5':
        return 'Piąta kategoria';
      default:
        return value;
    }
  }

}
