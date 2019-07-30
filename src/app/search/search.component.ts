import {Component, OnInit} from '@angular/core';
import {AppState} from '../store/app.state';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {GetAllBoardsAction} from '../store/actions/board.action';
import {BoardsModel} from '../store/models/board.model';
import {LabelModel} from '../store/models/label.model';
import {ListModel} from '../store/models/list.model';
import {AddSelectedBoard, AddSelectedLabel, AddSelectedList, AddSelectedSearch, ResetSelected} from '../store/actions/selected.action';
import {GetCardsAction, ResetCardsAction} from '../store/actions/card.action';
import {GetLabelAction, ResetLabelAction} from '../store/actions/label.action';
import {GetListAction, ResetListAction} from '../store/actions/list.action';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    trelloBoards$: Observable<BoardsModel[]>;
    trelloLabels$: Observable<LabelModel[]>;
    trelloLists$: Observable<ListModel[]>;
    selectedBoard$: Observable<string>;
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
        this.selectedBoard$ = this.store.select(store => store.selected.board);
        this.store.dispatch(new GetAllBoardsAction());
    }

    resetEverything() {
        this.store.dispatch(new ResetCardsAction());
        this.store.dispatch(new ResetLabelAction());
        this.store.dispatch(new ResetListAction());
        this.resetForm();
    }

    resetForm(resetBoards: boolean = false) {
        if (resetBoards) {
            this.form.board = '';
        }

        this.form.label = '';
        this.form.list = '';
        this.form.search = '';
        this.store.dispatch(new ResetSelected());
    }

    updateBoard() {
        this.resetEverything();
        this.store.dispatch(new AddSelectedBoard(this.form.board));
        this.store.dispatch(new GetCardsAction());
        this.store.dispatch(new GetLabelAction());
        this.store.dispatch(new GetListAction());
    }

    updateLabel() {
        this.store.dispatch(new AddSelectedLabel(this.form.label));
    }

    updateList() {
        this.store.dispatch(new AddSelectedList(this.form.list));
    }

    updateSearch(e) {
        if (e instanceof FocusEvent || (e instanceof KeyboardEvent && e.key === 'Enter')) {
            this.store.dispatch(new AddSelectedSearch(this.form.search));
        }
    }
}
