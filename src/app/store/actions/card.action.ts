import {Action} from '@ngrx/store';
import {CardType} from '../types/card.type';
import {CardModel} from '../models/card.model';

export class AddCardsAction implements Action {
    readonly type = CardType.ADD_CARDS;
    constructor(public payload: CardModel[]) {}
}

export class GetCardsAction implements Action {
    readonly type = CardType.GET_CARDS;
    constructor(public payload = null) {}
}

export class ResetCardsAction implements Action {
    readonly type = CardType.RESET_CARDS;
    constructor(public payload = null) {}
}

export type CardAction = AddCardsAction |
    GetCardsAction |
    ResetCardsAction;
