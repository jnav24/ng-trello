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
    form: any = {
        board: '',
        label: '',
        list: '',
        search: '',
    };

    constructor(
        private store: Store<AppState>,
    ) {}

    ngOnInit() {
        this.trelloBoards$ = this.store.select(store => store.trello.boards);
        this.trelloLabels$ = this.store.select(store => store.trello.labels);
        this.trelloLists$ = this.store.select(store => store.trello.lists);
        this.store.dispatch(new GetAllBoards());
    }

    updateBoard() {
        console.log('update board');
    }

    updateLabel() {
        console.log('update label');
    }

    updateList() {
        console.log('update list');
    }

    updateSearch(e) {
        if (e instanceof FocusEvent) {
            console.log('blurred: ' + this.form.search);
        }

        if (e instanceof KeyboardEvent && e.key === 'Enter') {
            console.log('key down: ' + this.form.search);
        }
    }
}
