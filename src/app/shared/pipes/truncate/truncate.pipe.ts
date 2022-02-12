import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'truncate'})
export class TruncatePipe implements PipeTransform {
  transform(value: string, length: number, symbol: string) {
    if (value.split(' ').length < length){
      return value;
    }
    return value.split(' ').slice(0, length).join(' ') + symbol;
  }
}
