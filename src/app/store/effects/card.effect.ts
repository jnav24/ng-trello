import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {TrelloService} from '../../services/trello.service';
import * as fromCards from '../actions/card.action';
import {CardType} from '../types/card.type';
import {concatMap, map, switchMap, tap, withLatestFrom} from 'rxjs/internal/operators';
import {AppState} from '../app.state';
import {Action, Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';

@Injectable()
export class CardEffect {
    constructor(
        private store: Store<AppState>,
        private readonly actions$: Actions,
        private readonly trelloService: TrelloService,
    ) {}

    @Effect()
    getAllCards$: Observable<Action> = this.actions$
        .pipe(
            ofType<fromCards.CardAction>(CardType.GET_CARDS),
            concatMap(action => of(action).pipe(
                withLatestFrom(
                    this.store.select(store => store.selected.board),
                ),
            )),
            switchMap(
                ([action, boardId]) => this.trelloService.getAllCards(boardId)
                    .pipe(
                        map(cards => new fromCards.AddCardsAction(cards)),
                    ),
            )
        );
}
