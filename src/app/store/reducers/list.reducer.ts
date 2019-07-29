import {ListModel} from '../models/list.model';
import {ListAction} from '../actions/list.action';
import {ListType} from '../types/list.type';

const initState = [];

export function ListReducer(state: ListModel[] = initState, action: ListAction) {
    switch (action.type) {
        case ListType.ADD_LIST:
            return [ ...action.payload ];
        case ListType.RESET_LIST:
            return [];
        default:
            return state;
    }
}
