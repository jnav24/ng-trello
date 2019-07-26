import {Component, OnInit} from '@angular/core';
import {AppState} from '../store/app.state';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {TrelloBoardsModel} from '../store/models/trello.model';
import {AddBoardAction} from '../store/actions/trello.action';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    trelloBoards$: Observable<TrelloBoardsModel[]>;

    constructor(
        private store: Store<AppState>,
    ) {}

    ngOnInit() {
        this.addBoards();
        this.trelloBoards$ = this.store.select(store => store.trello.boards);
    }

    addBoards() {
        const updatedBoards: TrelloBoardsModel[] = [
            {
                name: 'Dev - Core',
                id: '56d727121c81434ab36d228b',
                url: 'https://trello.com/b/ySP2ijVq/dev-core',
            },
            {
                name: 'DevOps',
                id: '5ccc90684c030505e93ecb25',
                url: 'https://trello.com/b/Gwyo2Pdg/devops',
            },
            {
                name: 'IQ DevOps',
                id: '5c192e2ce102b04933867908',
                url: 'https://trello.com/b/1TynEXLX/iq-devops',
            },
            {
                name: 'IQ Prod Defect Triage',
                id: '5bf6f887e92979558619bfe1',
                url: 'https://trello.com/b/CnrBdilo/iq-prod-defect-triage',
            },
        ];

        this.store.dispatch(new AddBoardAction(updatedBoards));
    }
}
