import {BoardAction} from '../actions/board.action';
import {BoardTypes} from '../types/board.type';

const initState = [];

export function BoardReducer(state: BoardAction[] = initState, action: BoardAction) {
    switch (action.type) {
        case BoardTypes.ADD_BOARDS:
            return [ ...action.payload ];
        case BoardTypes.RESET_BOARDS:
            return [];
        default:
            return state;
    }
}
