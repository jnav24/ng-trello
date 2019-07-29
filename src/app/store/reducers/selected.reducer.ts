import {SelectedAction} from '../actions/selected.action';
import {SelectedModel} from '../models/selected.model';
import {SelectedType} from '../types/selected.type';

const initState = {
    board: '',
    label: '',
    list: '',
    search: '',
};

export function SelectedReducer(state: SelectedModel = initState, action: SelectedAction) {
    switch (action.type) {
        case SelectedType.ADD_SELECTED_BOARD:
            return { ...state, board: action.payload };
        case SelectedType.ADD_SELECTED_LABEL:
            return { ...state, label: action.payload };
        case SelectedType.ADD_SELECTED_LIST:
            return { ...state, list: action.payload };
        case SelectedType.ADD_SELECTED_SEARCH:
            return { ...state, search: action.payload };
        case SelectedType.RESET_SELECTED:
            return initState;
        default:
            return state;
    }
}
