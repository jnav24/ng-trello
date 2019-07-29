import {TrelloService} from '../../services/trello.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/internal/operators';
import {AddBoardAction, BoardAction, ResetBoardAction} from '../actions/board.action';
import {BoardTypes} from '../types/board.type';
import {Injectable} from '@angular/core';
import {of} from 'rxjs';

@Injectable()
export class BoardEffect {
    constructor(
        private readonly actions$: Actions,
        private readonly trelloService: TrelloService,
    ) {}

    @Effect()
    getBoards$ = this.actions$
        .pipe(
            ofType<BoardAction>(BoardTypes.GET_BOARDS),
            switchMap(
                () => this.trelloService.getBoards()
                    .pipe(
                        map(boards => new AddBoardAction(boards)),
                        catchError(error => of(new ResetBoardAction())),
                    ),
            ),
        );
}
