import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AppState} from '../app.state';
import {Action, Store} from '@ngrx/store';
import {TrelloService} from '../../services/trello.service';
import {Observable, of} from 'rxjs';
import {concatMap, map, switchMap, withLatestFrom} from 'rxjs/internal/operators';
import * as fromLists from '../actions/list.action';
import {ListType} from '../types/list.type';
import {AddListAction} from '../actions/list.action';

@Injectable()
export class ListEffect {
    constructor(
        private store: Store<AppState>,
        private readonly actions$: Actions,
        private readonly trelloService: TrelloService,
    ) {}

    @Effect()
    getAllLists$: Observable<Action> = this.actions$
        .pipe(
            ofType<fromLists.ListAction>(ListType.GET_LIST),
            concatMap((action) => of(action).pipe(
                withLatestFrom(this.store.select(state => state.selected.board)),
            )),
            switchMap(
                ([action, boardId]) => this.trelloService.getAllLists(boardId)
                    .pipe(
                        map(lists => new AddListAction(lists)),
                    )
            )
        );
}
