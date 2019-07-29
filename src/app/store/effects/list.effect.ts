import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';

@Injectable()
export class ListEffect {
    constructor(
        private readonly actions$: Actions,
    ) {}
}
