import {TrelloModel} from './models/trello.model';
import {BoardsModel} from './models/board.model';
import {LabelModel} from './models/label.model';
import {ListModel} from './models/list.model';
import {CardModel} from './models/card.model';

export interface AppState {
    readonly boards: BoardsModel[];
    readonly cards: CardModel[];
    readonly labels: LabelModel[];
    readonly list: ListModel[];
    readonly trello: TrelloModel;
}
