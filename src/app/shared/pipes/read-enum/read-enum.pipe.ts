import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readEnum'
})
export class ReadEnumPipe implements PipeTransform {

  transform(value: object, ...args: unknown[]): Array<any> {
    const values = Object.values(value);
    return values.splice(0);
  }

}
