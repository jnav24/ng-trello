import {Component, OnInit} from '@angular/core';
import {AppState} from '../store/app.state';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {TrelloBoardsModel, TrelloLabelsModel, TrelloListsModel} from '../store/models/trello.model';
import {GetAllBoards} from '../store/actions/trello.action';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    trelloBoards$: Observable<TrelloBoardsModel[]>;
    trelloLabels$: Observable<TrelloLabelsModel[]>;
    trelloLists$: Observable<TrelloListsModel[]>;

    constructor(
        private store: Store<AppState>,
    ) {}

    ngOnInit() {
        this.trelloBoards$ = this.store.select(store => store.trello.boards);
        this.trelloLabels$ = this.store.select(store => store.trello.labels);
        this.trelloLists$ = this.store.select(store => store.trello.lists);
        this.store.dispatch(new GetAllBoards());
    }
}
