import {Action} from '@ngrx/store';
import {LabelModel} from '../models/label.model';
import {LabelType} from '../types/label.type';

export class AddLabelAction implements Action {
    readonly type = LabelType.ADD_LABEL;
    constructor(public payload: LabelModel[]) {}
}

export class GetLabelAction implements Action {
    readonly type = LabelType.GET_LABEL;
    constructor(public payload = null) {}
}

export class ResetLabelAction implements Action {
    readonly type = LabelType.RESET_LABEL;
    constructor(public payload = null) {}
}

export type LabelAction = AddLabelAction |
    GetLabelAction |
    ResetLabelAction;
