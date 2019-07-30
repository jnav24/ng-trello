import {Component, OnInit} from '@angular/core';
import {AppState} from '../store/app.state';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {GetAllBoardsAction} from '../store/actions/board.action';
import {BoardsModel} from '../store/models/board.model';
import {LabelModel} from '../store/models/label.model';
import {ListModel} from '../store/models/list.model';
import {AddSelectedBoard} from '../store/actions/selected.action';
import {GetCardsAction} from '../store/actions/card.action';
import {GetLabelAction} from '../store/actions/label.action';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    trelloBoards$: Observable<BoardsModel[]>;
    trelloLabels$: Observable<LabelModel[]>;
    trelloLists$: Observable<ListModel[]>;
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
        this.trelloBoards$ = this.store.select(store => store.boards);
        this.trelloLabels$ = this.store.select(store => store.labels);
        this.trelloLists$ = this.store.select(store => store.list);
        this.store.dispatch(new GetAllBoardsAction());
    }

    resetEverything() {
        // reset card state
        // reset label state
        // reset list state
        this.resetForm();
    }

    resetForm(resetBoards: boolean = false) {
        if (resetBoards) {
            this.form.board = '';
        }

        this.form.label = '';
        this.form.list = '';
        this.form.search = '';
        // reset the selected state
    }

    updateBoard() {
        console.log('update board');
        this.resetEverything();
        // add board value to selected board state
        this.store.dispatch(new AddSelectedBoard(this.form.board));
        // get all cards
        this.store.dispatch(new GetCardsAction());
        // get all labels
        this.store.dispatch(new GetLabelAction());
        // get all lists
    }

    updateLabel() {
        console.log('update label');
        // add selected label state
    }

    updateList() {
        console.log('update list');
        // add selected list state
    }

    updateSearch(e) {
        if (e instanceof FocusEvent) {
            console.log('blurred: ' + this.form.search);
            // add selected search state
        }

        if (e instanceof KeyboardEvent && e.key === 'Enter') {
            console.log('key down: ' + this.form.search);
            // add selected search state
        }
    }
}
