import {LabelAction} from '../actions/label.action';
import {LabelModel} from '../models/label.model';
import {LabelType} from '../types/label.type';

const initState = [];

export function LabelReducer(state: LabelModel[] = initState, action: LabelAction) {
    switch (action.type) {
        case LabelType.ADD_LABELS:
            return [ ...action.payload ];
        case LabelType.RESET_LABELS:
            return [];
        default:
            return state;
    }
}
