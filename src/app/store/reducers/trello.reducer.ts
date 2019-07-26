import {TrelloModel} from '../models/trello.model';
import {TrelloAction, TrelloTypes} from '../actions/trello.action';

const initialState: TrelloModel = {
    boards: [],
    labels: [],
    lists: [],
    cards: [],
    selected: {
        board: '',
        list: '',
        label: '',
        search: '',
    },
    loading: false,
};

export function TrelloReducer(state: TrelloModel = initialState, action: TrelloAction) {
    switch (action.type) {
        case TrelloTypes.ADD_BOARDS:
            return { ...state, boards: action.payload };
        case TrelloTypes.ADD_LABELS:
            return { ...state, labels: action.payload };
        case TrelloTypes.ADD_LISTS:
            return { ...state, lists: action.payload };
        default:
            return state;
    }
}
