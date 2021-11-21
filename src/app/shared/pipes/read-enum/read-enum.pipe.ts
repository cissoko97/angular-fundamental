import { Pipe, PipeTransform } from '@angular/core';
import { Level } from '../../../user/enum/level.enum';

@Pipe({
  name: 'readEnum'
})
export class ReadEnumPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): Array<any> {
    const values = Object.values(value);
    return values.splice(0);
  }

}
