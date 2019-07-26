export interface TrelloModel {
    boards: any[];
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
