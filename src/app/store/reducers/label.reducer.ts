import {LabelAction} from '../actions/label.action';
import {LabelModel} from '../models/label.model';
import {LabelType} from '../types/label.type';

const initState = [];

export function LabelReducer(state: LabelModel[] = initState, action: LabelAction) {
    switch (action.type) {
        case LabelType.ADD_LABEL:
            return [ ...action.payload ];
        case LabelType.RESET_LABEL:
            return [];
        default:
            return state;
    }
}
