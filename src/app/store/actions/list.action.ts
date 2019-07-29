import {Action} from '@ngrx/store';
import {ListType} from '../types/list.type';
import {ListModel} from '../models/list.model';

export class AddListAction implements Action {
    readonly type = ListType.ADD_LIST;
    constructor(public payload: ListModel[]) {}
}

export class GetListAction implements Action {
    readonly type = ListType.GET_LIST;
    constructor(public payload = null) {}
}

export class ResetListAction implements Action {
    readonly type = ListType.RESET_LIST;
    constructor(public payload = null) {}
}

export type ListAction = AddListAction |
    GetListAction |
    ResetListAction;
