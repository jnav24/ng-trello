import {Action} from '@ngrx/store';
import {TrelloBoardsModel, TrelloLabelsModel, TrelloListsModel} from '../models/trello.model';

export enum TrelloTypes {
    ADD_BOARDS = '[TRELLO] Add Boards',
    ADD_LABELS = '[TRELLO] Add Labels',
    ADD_LISTS = '[TRELLO] Add Lists',
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

export type TrelloAction = AddBoardAction | AddLabelsAction | AddListsAction;
