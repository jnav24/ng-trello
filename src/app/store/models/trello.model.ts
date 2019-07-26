export interface TrelloBoardsModel {
    id: string;
    name: string;
    url: string;
}

export interface TrelloLabelsModel {
    id: string;
    name: string;
}

export interface TrelloListsModel {
    id: string;
    name: string;
}

export interface TrelloModel {
    boards: TrelloBoardsModel[];
    labels: any[];
    lists: any[];
    cards: any[];
    selected: {
        board: string;
        list: string;
        label: string;
        search: string;
    };
    loading: boolean;
}
