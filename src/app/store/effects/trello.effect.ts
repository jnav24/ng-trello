import {Injectable} from '@angular/core';
import {TrelloService} from '../../services/trello.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AddBoardAction, TrelloAction, TrelloTypes} from '../actions/trello.action';
import {catchError, map, mergeMap} from 'rxjs/internal/operators';
import {of} from 'rxjs';

@Injectable()
export class TrelloEffect {
    constructor(
        private readonly actions$: Actions,
        private readonly trelloService: TrelloService,
    ) {}

    @Effect()
    loadBoards$ = this.actions$
        .pipe(
            ofType<TrelloAction>(TrelloTypes.GET_BOARDS),
            mergeMap(
                () => this.trelloService.getBoards()
                    .pipe(
                        map(data => new AddBoardAction(data)),
                        catchError(error => of(new AddBoardAction([{ id: '2', name: 'Bruce Wayne', url: '' }]))),
                    )
            )
    );
}
