import {Action} from '@ngrx/store';
import {TrelloModel} from '../models/trello.model';

export enum TrelloTypes {
    ADD_BOARDS = '[TRELLO] Add Boards',
    ADD_LABELS = '[TRELLO] Add Labels',
    ADD_LISTS = '[TRELLO] Add Lists',
}

export class AddBoardAction implements Action {
    readonly type = TrelloTypes.ADD_BOARDS;

    constructor(public payload: TrelloModel) {}
}

export type TrelloAction = AddBoardAction;
