import {SelectedType} from '../types/selected.type';
import {Action} from '@ngrx/store';

export class AddSelectedBoard implements Action {
    readonly type = SelectedType.ADD_SELECTED_BOARD;
    constructor(public payload: string) {}
}

export class AddSelectedLabel implements Action {
    readonly type = SelectedType.ADD_SELECTED_LABEL;
    constructor(public payload: string) {}
}

export class AddSelectedList implements Action {
    readonly type = SelectedType.ADD_SELECTED_LIST;
    constructor(public payload: string) {}
}

export class AddSelectedSearch implements Action {
    readonly type = SelectedType.ADD_SELECTED_SEARCH;
    constructor(public payload: string) {}
}

export class ResetSelected implements Action {
    readonly type = SelectedType.RESET_SELECTED;
    constructor(public payload = null) {}
}

export type SelectedAction = AddSelectedBoard |
    AddSelectedLabel |
    AddSelectedList |
    AddSelectedSearch |
    ResetSelected;
