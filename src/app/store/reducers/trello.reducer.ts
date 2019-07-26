import {TrelloModel} from '../models/trello.model';
import {TrelloAction} from '../actions/trello.action';

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
        default:
            return state;
    }
}
