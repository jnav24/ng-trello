import {CardModel} from '../models/card.model';
import {CardAction} from '../actions/card.action';
import {CardType} from '../types/card.type';

const initState = [];

export function CardReducer(state: CardModel[] = initState, action: CardAction) {
    switch (action.type) {
        case CardType.ADD_CARDS:
            return [ ...action.payload ];
        case CardType.RESET_CARDS:
            return [];
        default:
            return state;
    }
}
