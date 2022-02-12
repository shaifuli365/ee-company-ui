import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sum'
})
export class SumPipe<T> implements PipeTransform {
    transform(arr: Array<{ [k in keyof T]: number }>, prop: keyof T): any {
        return arr.reduce((sum, cur) => sum + cur[prop], 0);
    }
}
