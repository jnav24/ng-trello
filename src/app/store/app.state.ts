import {TrelloModel} from './models/trello.model';
import {BoardsModel} from './models/board.model';
import {LabelModel} from './models/label.model';

export interface AppState {
    readonly boards: BoardsModel[];
    readonly labels: LabelModel[];
    readonly trello: TrelloModel;
}
