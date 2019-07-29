import {Action} from '@ngrx/store';
import {BoardTypes} from '../types/board.type';
import {BoardsModel} from '../models/board.model';

export class AddBoardAction implements Action {
    readonly type = BoardTypes.ADD_BOARDS;
    constructor(public payload: BoardsModel[]) {}
}

export class GetAllBoardsAction implements Action {
    readonly type = BoardTypes.GET_BOARDS;
    constructor(public payload = null) {}
}

export class ResetBoardAction implements Action {
    readonly type = BoardTypes.RESET_BOARDS;
    constructor(public payload = null) {}
}

export type BoardAction = AddBoardAction |
    GetAllBoardsAction |
    ResetBoardAction;
