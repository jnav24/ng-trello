import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {TrelloService} from '../../services/trello.service';
import {AppState} from '../app.state';
import {Store} from '@ngrx/store';
import * as fromLabels from '../actions/label.action';
import {LabelType} from '../types/label.type';
import {concatMap, map, mergeMap, tap, withLatestFrom} from 'rxjs/internal/operators';
import {of} from 'rxjs';

@Injectable()
export class LabelEffect {
    constructor(
        private store: Store<AppState>,
        private readonly actions$: Actions,
        private readonly trelloService: TrelloService,
    ) {}

    @Effect()
    getAllLabels$ = this.actions$
        .pipe(
            ofType<fromLabels.LabelAction>(LabelType.GET_LABELS),
            concatMap(action => of(action).pipe(
                withLatestFrom(this.store.select(store => store.selected.board)),
            )),
            mergeMap(
                ([action, boardId]) => this.trelloService.getAllLabels(boardId)
                    .pipe(
                        map(labels => new fromLabels.AddLabelAction(labels))
                    )
            ),
        );
}
