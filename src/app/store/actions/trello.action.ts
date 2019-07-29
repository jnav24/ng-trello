import {Action} from '@ngrx/store';
import {TrelloBoardsModel, TrelloLabelsModel, TrelloListsModel} from '../models/trello.model';

export enum TrelloTypes {
    ADD_BOARDS = '[TRELLO] Add Boards',
    ADD_LABELS = '[TRELLO] Add Labels',
    ADD_LISTS = '[TRELLO] Add Lists',
    GET_BOARDS = '[TRELLO] Get Boards',
}

export class AddBoardAction implements Action {
    readonly type = TrelloTypes.ADD_BOARDS;
    constructor(public payload: TrelloBoardsModel[]) {}
}

export class AddLabelsAction implements Action {
    readonly type = TrelloTypes.ADD_LABELS;
    constructor(public payload: TrelloLabelsModel[]) {}
}

export class AddListsAction implements Action {
    readonly type = TrelloTypes.ADD_LISTS;
    constructor(public payload: TrelloListsModel) {}
}

export class GetAllBoards implements Action {
    readonly type = TrelloTypes.GET_BOARDS;
}

export type TrelloAction = AddBoardAction |
    AddLabelsAction |
    AddListsAction |
    GetAllBoards;
