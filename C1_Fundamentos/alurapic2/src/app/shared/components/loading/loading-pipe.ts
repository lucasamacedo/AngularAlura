import { Pipe, PipeTransform } from '@angular/core';
import { isObservable, Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Pipe({ name: 'startWith' })
export class StartWithPipe implements PipeTransform {

    constructor() {}

    transform(value: Observable<any> | any, defaultValue: any): Observable<any> {
        if (isObservable(value)) {
            return value.pipe(startWith(defaultValue));
        } else {
            throw Error('Needs to be an observable');
        }
    }
}
