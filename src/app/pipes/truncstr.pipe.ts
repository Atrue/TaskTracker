import { Pipe, PipeTransform } from '@angular/core';

/* используется для обрезки строки
* ex:
* '1234567890' | truncstr:5 => '12345...'
* '123' | truncstr:5 => '123'
* '1234567890' | truncstr:5,'!' => '12345!'
*/
@Pipe({
  name: 'truncstr'
})
export class TruncstrPipe implements PipeTransform {
  // трансформирует строку,
  // value - исходная строка, maxchars - максимальное количество символов, endchar - символ конца обрезанной строки
  transform(value: string, maxchars: number, endchar: string = '...'): string {
    if (value.length > maxchars) {
      value = value.slice(0, maxchars) + endchar;
    }
    return value;
  }
}
