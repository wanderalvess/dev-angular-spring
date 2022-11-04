import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'front-end': return 'code';
      case 'back-end': return 'computer';
    }
    return 'code';
  }

}
