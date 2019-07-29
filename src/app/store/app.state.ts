import {TrelloModel} from './models/trello.model';
import {BoardsModel} from './models/board.model';

export interface AppState {
    readonly trello: TrelloModel;
    readonly boards: BoardsModel[];
}
