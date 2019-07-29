import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';

@Injectable()
export class LabelEffect {
    constructor(
        private readonly actions$: Actions,
    ) {}
}
